import { NextResponse } from "next/server";

interface CertificationSubmission {
  id: string;
  studentName: string;
  email: string;
  score: number;
  maxScore: number;
  passed: boolean;
  challengeAnswers: Record<number, string>;
  submittedAt: string;
}

const submissions: CertificationSubmission[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, email, score, maxScore, challengeAnswers } = body;

    if (!studentName || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const passed = score >= maxScore * 0.7;
    const submission: CertificationSubmission = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      studentName,
      email,
      score,
      maxScore,
      passed,
      challengeAnswers,
      submittedAt: new Date().toISOString(),
    };

    submissions.push(submission);

    return NextResponse.json({
      success: true,
      message: "Submission Successful",
      submissionId: submission.id,
      passed,
      score,
      maxScore,
    });
  } catch {
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    count: submissions.length,
    message: "TAIC Certification Submissions API",
  });
}
