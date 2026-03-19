"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProgress } from "@/hooks/useProgress";

export default function Module7Page() {
  const { completeModule, updateModuleProgress, progress, isLoaded } = useProgress();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [exerciseAnswer, setExerciseAnswer] = useState("");
  const [exerciseSubmitted, setExerciseSubmitted] = useState(false);
  const router = useRouter();

  const sections = [
    {
      title: "Moving to Production",
      content: `Your prompts work in testing. Now let's make them work in production.

      <div class="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
        <h4 class="text-red-400 font-semibold mb-2">⚠️ Production is Different</h4>
        <p class="text-slate-300 text-sm">Production means: real users, real data, real consequences. Your prompts must be bulletproof.</p>
      </div>

      <div class="mt-6 grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">🔒 Reliability</h4>
          <p class="text-slate-400 text-sm">Consistent outputs, error handling, fallback strategies</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">📊 Observability</h4>
          <p class="text-slate-400 text-sm">Logging, monitoring, understanding failures</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">🛡️ Safety</h4>
          <p class="text-slate-400 text-sm">Input validation, output filtering, abuse prevention</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">📈 Performance</h4>
          <p class="text-slate-400 text-sm">Latency, cost optimization, caching strategies</p>
        </div>
      </div>`,
    },
    {
      title: "Error Handling Patterns",
      content: `Things will go wrong. Design for failure.

      <div class="mt-6 space-y-4">
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Graceful Degradation</h4>
          <p class="text-slate-400 text-sm">When AI fails, provide helpful fallback. "I couldn't analyze that, but here's a template to get you started..."</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Input Validation</h4>
          <p class="text-slate-400 text-sm">Check inputs before sending to AI. Reject obviously invalid requests early to save cost and improve UX.</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Output Verification</h4>
          <p class="text-slate-400 text-sm">Validate AI outputs match expected format/structure. Parse errors are common—handle them explicitly.</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Retry with Backoff</h4>
          <p class="text-slate-400 text-sm">Transient failures happen. Implement exponential backoff, but limit retries to avoid cascading failures.</p>
        </div>
      </div>`,
    },
    {
      title: "Cost Optimization",
      content: `AI isn't free. Optimize for cost without sacrificing quality.

      <div class="mt-6 space-y-4">
        <div class="flex items-start gap-3">
          <span class="text-amber-400 text-2xl">1.</span>
          <div>
            <h4 class="text-white font-semibold">Prompt Compression</h4>
            <p class="text-slate-400 text-sm">Remove redundant instructions. Shorter prompts = lower token costs.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-amber-400 text-2xl">2.</span>
          <div>
            <h4 class="text-white font-semibold">Context Optimization</h4>
            <p class="text-slate-400 text-sm">Only include relevant context. Don't dump entire documents if you only need specific sections.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-amber-400 text-2xl">3.</span>
          <div>
            <h4 class="text-white font-semibold">Model Selection</h4>
            <p class="text-slate-400 text-sm">Use cheaper models for simple tasks. Save expensive models for complex reasoning.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-amber-400 text-2xl">4.</span>
          <div>
            <h4 class="text-white font-semibold">Caching</h4>
            <p class="text-slate-400 text-sm">Cache frequent requests. Same prompt + same context = cached response.</p>
          </div>
        </div>
      </div>`,
    },
    {
      title: "Security & Safety",
      content: `Protect your users and your system.

      <div class="mt-6 space-y-4">
        <div class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <h4 class="text-red-400 font-semibold mb-2">Prompt Injection</h4>
          <p class="text-slate-300 text-sm">Attackers try to override your instructions. Validate/sanitize user inputs that might contain injection attempts.</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Output Filtering</h4>
          <p class="text-slate-400 text-sm">Review AI outputs before displaying to users. Filter sensitive data, inappropriate content.</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Rate Limiting</h4>
          <p class="text-slate-400 text-sm">Prevent abuse. Limit requests per user to control costs and ensure fair access.</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">PII Handling</h4>
          <p class="text-slate-400 text-sm">Don't send personal information to AI unless necessary. Anonymize data when possible.</p>
        </div>
      </div>`,
    },
    {
      title: "Interactive Exercise",
      content: `Create a production readiness checklist for an AI feature you're developing.

      <div class="mt-4 p-4 bg-slate-900 border border-slate-700 rounded-lg mb-6">
        <p class="text-slate-300">Question: What are the 5 most critical items to verify before launching an AI feature?</p>
      </div>

      <p class="text-slate-400 text-sm mb-4">List your checklist items:</p>
      
      <textarea
        value={exerciseAnswer}
        onChange={(e) => setExerciseAnswer(e.target.value)}
        className="w-full h-40 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
        placeholder="1. Error handling for failed API calls..."
      />
      
      ${exerciseSubmitted ? `
        <div class="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h4 class="text-green-400 font-semibold mb-2">✓ Checklist Submitted</h4>
          <p class="text-slate-300 text-sm">Consider: Input validation, error handling, output verification, logging, rate limiting, fallback UX, cost controls.</p>
        </div>
      ` : ''}`,
    },
  ];

  const handleSectionComplete = () => {
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
      updateModuleProgress(7, Math.round(((completedSections.length + 1) / sections.length) * 100));
    }
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const submitExercise = () => {
    setExerciseSubmitted(true);
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
  };

  const handleModuleComplete = () => {
    completeModule(7);
    router.push("/course");
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
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
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">Module 7 of 7</span>
            <span className="text-amber-400">•</span>
            <span className="text-amber-400">Production Best Practices</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            {sections.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= currentSection
                    ? "bg-amber-500"
                    : completedSections.includes(i)
                    ? "bg-green-500"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {sections[currentSection].title}
          </h1>
          
          <div 
            className="prose prose-invert max-w-none mt-6"
            dangerouslySetInnerHTML={{ 
              __html: currentSection === sections.length - 1 && !exerciseSubmitted
                ? sections[sections.length - 1].content.replace(
                    /<textarea[\s\S]*?<\/textarea>/,
                    ''
                  ).replace(
                    /\$\{exerciseSubmitted[\s\S]*?\}\s*/,
                    ''
                  )
                : sections[currentSection].content 
            }}
          />

          {currentSection === sections.length - 1 && (
            <div className="mt-6">
              <textarea
                value={exerciseAnswer}
                onChange={(e) => setExerciseAnswer(e.target.value)}
                className="w-full h-40 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
                placeholder="1. Error handling for failed API calls..."
              />
              <button
                onClick={submitExercise}
                disabled={exerciseAnswer.length < 30}
                className="mt-4 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Submit Checklist
              </button>
              {exerciseSubmitted && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <h4 className="text-green-400 font-semibold mb-2">✓ Checklist Submitted</h4>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => {
              if (currentSection > 0) setCurrentSection(currentSection - 1);
            }}
            disabled={currentSection === 0}
            className="px-6 py-3 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          
          {currentSection < sections.length - 1 ? (
            <button
              onClick={handleSectionComplete}
              className="px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Next Section →
            </button>
          ) : exerciseSubmitted ? (
            <button
              onClick={handleModuleComplete}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Complete Module → Back to Course
            </button>
          ) : null}
        </div>
      </main>
    </div>
  );
}
