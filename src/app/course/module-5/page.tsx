"use client";

import { useState } from "react";
import Link from "next/link";

interface Challenge {
  id: number;
  title: string;
  scenario: string;
  task: string;
  successCriteria: string[];
  hints: string[];
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Challenge 1: The 5 Pillars Mastery",
    scenario: "You're building a data pipeline that processes customer CSV files. The pipeline needs to validate, transform, and load data into a PostgreSQL database.",
    task: "Write a prompt that would get you production-ready code on the first try. Your prompt must demonstrate all 5 pillars.",
    successCriteria: [
      "Clearly states the task (build data pipeline)",
      "Provides context (CSV processing, PostgreSQL target)",
      "Defines persona (senior backend engineer)",
      "Specifies format (async functions, type hints, error handling)",
      "Includes examples (sample input/output)",
    ],
    hints: [
      "Start with the action verb: 'Create', 'Build', 'Implement'",
      "List your 5 pillars explicitly in your prompt",
    ],
  },
  {
    id: 2,
    title: "Challenge 2: Agentic Workflow Design",
    scenario: "A client needs an automated code review system that checks PRs for security vulnerabilities, style violations, and performance issues.",
    task: "Design the workflow. How would you decompose this task? What agents would you use? How would you verify results?",
    successCriteria: [
      "Decomposes into 3+ subtasks",
      "Identifies agent types (e.g., Tool-using for scanning, Planning for orchestration)",
      "Includes verification step",
      "Has error handling strategy",
    ],
    hints: [
      "Think: Scan → Analyze → Report → Notify",
      "What tools would each agent need?",
    ],
  },
  {
    id: 3,
    title: "Challenge 3: Hallucination Recovery",
    scenario: "You asked an AI to write a React component using the Next.js App Router. It gave you code using 'getServerSideProps' which doesn't exist in App Router.",
    task: "Write the corrective prompt. What would you say to get the correct output?",
    successCriteria: [
      "Identifies the specific error (uses deprecated Pages Router API)",
      "Provides correct context (App Router uses Server Components)",
      "Requests specific correction",
      "Is constructive, not confrontational",
    ],
    hints: [
      "Be specific: 'This is for Next.js App Router, not Pages Router'",
      "Include: what you want instead of what was wrong",
    ],
  },
];

export default function Module5Page() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});
  const [scores, setScores] = useState<Record<number, number>>({});
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});
  const [certified, setCertified] = useState(false);

  const submitChallenge = (challengeId: number) => {
    const answer = answers[challengeId]?.toLowerCase() || "";
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge) return;

    let score = 0;
    challenge.successCriteria.forEach(criterion => {
      const keywords = criterion.toLowerCase().split(" ").filter(w => w.length > 3);
      const matches = keywords.filter(k => answer.includes(k)).length;
      if (matches >= 2) score++;
    });

    setScores({ ...scores, [challengeId]: Math.min(score, challenge.successCriteria.length) });
    setSubmitted({ ...submitted, [challengeId]: true });
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = challenges.reduce((a, b) => a + b.successCriteria.length, 0);
  const allSubmitted = challenges.every(c => submitted[c.id]);

  if (allSubmitted && totalScore >= maxScore * 0.7) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-8 text-center">
          <div className="text-8xl mb-8">🎓</div>
          <h1 className="text-4xl font-bold text-white mb-4">TAIC Certified!</h1>
          <p className="text-xl text-slate-300 mb-8">
            You&apos;ve demonstrated mastery in Technical AI Communication. You are now 
            qualified to design and manage AI-driven workflows in any technical environment.
          </p>
          <div className="bg-slate-800/50 border border-amber-500/20 rounded-2xl p-6 mb-8">
            <div className="text-3xl font-bold text-amber-400 mb-2">
              {totalScore}/{maxScore}
            </div>
            <p className="text-slate-400">Final Score</p>
          </div>
          <Link
            href="/course"
            className="inline-block px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
          >
            Return to Course Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/course" className="text-xl font-bold text-amber-400">
            TAIC Digital Twin
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-400">
              Score: <span className="text-amber-400 font-semibold">{totalScore}/{maxScore}</span>
            </div>
            <div className="text-sm text-slate-400">
              {challenges.filter(c => submitted[c.id]).length}/{challenges.length} Completed
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Certification Assessment
          </h1>
          <p className="text-slate-300">
            Complete all three challenges to earn your TAIC Certification. 
            Score at least 70% to pass. This is where theory becomes practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {challenges.map((challenge, i) => (
            <button
              key={challenge.id}
              onClick={() => setCurrentChallenge(i)}
              className={`p-4 rounded-xl text-center transition-all ${
                currentChallenge === i
                  ? "bg-amber-500/20 border-2 border-amber-500"
                  : submitted[challenge.id]
                  ? `border-2 ${scores[challenge.id] >= challenge.successCriteria.length * 0.7 ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`
                  : "bg-slate-800/50 border-2 border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="text-sm font-mono text-slate-500 mb-1">Challenge {challenge.id}</div>
              <div className={`text-sm font-semibold ${currentChallenge === i ? "text-amber-400" : "text-white"}`}>
                {submitted[challenge.id] 
                  ? `${scores[challenge.id]}/${challenge.successCriteria.length} pts`
                  : `Challenge ${i + 1}`}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {challenges[currentChallenge].title}
            </h2>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg mb-6">
            <h4 className="text-slate-400 text-sm mb-2">Scenario</h4>
            <p className="text-white">{challenges[currentChallenge].scenario}</p>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg mb-6">
            <h4 className="text-amber-400 text-sm mb-2">Your Task</h4>
            <p className="text-white">{challenges[currentChallenge].task}</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-slate-400 text-sm">Success Criteria</h4>
              <button
                onClick={() => setShowHints({ ...showHints, [currentChallenge]: !showHints[currentChallenge] })}
                className="text-sm text-slate-500 hover:text-slate-400"
              >
                {showHints[currentChallenge] ? "Hide Hints" : "Show Hints"}
              </button>
            </div>
            <ul className="space-y-2">
              {challenges[currentChallenge].successCriteria.map((criteria, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-green-500 mt-1">✓</span>
                  {criteria}
                </li>
              ))}
            </ul>
            {showHints[currentChallenge] && (
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="text-blue-400 text-sm font-semibold mb-2">Hints</h4>
                <ul className="space-y-1">
                  {challenges[currentChallenge].hints.map((hint, i) => (
                    <li key={i} className="text-slate-300 text-sm">• {hint}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {submitted[challenges[currentChallenge].id] ? (
            <div className={`p-4 rounded-lg ${scores[challenges[currentChallenge].id] >= challenges[currentChallenge].successCriteria.length * 0.7 ? 'bg-green-500/10 border border-green-500/20' : 'bg-amber-500/10 border border-amber-500/20'}`}>
              <h4 className={`font-semibold ${scores[challenges[currentChallenge].id] >= challenges[currentChallenge].successCriteria.length * 0.7 ? 'text-green-400' : 'text-amber-400'}`}>
                {scores[challenges[currentChallenge].id] >= challenges[currentChallenge].successCriteria.length * 0.7 ? "✓ Passed" : "Keep Trying"}
              </h4>
              <p className="text-slate-300 text-sm mt-1">
                Score: {scores[challenges[currentChallenge].id]}/{challenges[currentChallenge].successCriteria.length}
              </p>
            </div>
          ) : (
            <>
              <textarea
                value={answers[challenges[currentChallenge].id] || ""}
                onChange={(e) => setAnswers({ ...answers, [challenges[currentChallenge].id]: e.target.value })}
                className="w-full h-48 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
                placeholder="Write your answer here..."
              />
              <button
                onClick={() => submitChallenge(challenges[currentChallenge].id)}
                disabled={!answers[challenges[currentChallenge].id] || answers[challenges[currentChallenge].id].length < 50}
                className="mt-4 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Submit Answer
              </button>
            </>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => {
              if (currentChallenge > 0) setCurrentChallenge(currentChallenge - 1);
            }}
            disabled={currentChallenge === 0}
            className="px-6 py-3 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous Challenge
          </button>
          
          <button
            onClick={() => {
              if (currentChallenge < challenges.length - 1) setCurrentChallenge(currentChallenge + 1);
            }}
            disabled={currentChallenge === challenges.length - 1 || !submitted[challenges[currentChallenge].id]}
            className="px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next Challenge →
          </button>
        </div>

        {allSubmitted && totalScore < maxScore * 0.7 && (
          <div className="mt-8 p-6 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
            <h3 className="text-xl font-bold text-red-400 mb-2">Not Quite There</h3>
            <p className="text-slate-300 mb-4">
              You scored {totalScore}/{maxScore}. You need at least 70% to certify.
            </p>
            <p className="text-slate-400 text-sm">
              Review your answers and try again. Each challenge has specific success criteria—make sure your answers address each one.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
