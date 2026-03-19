"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProgress } from "@/hooks/useProgress";

export default function Module6Page() {
  const { completeModule, updateModuleProgress, progress, isLoaded } = useProgress();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [exerciseAnswer, setExerciseAnswer] = useState("");
  const [exerciseSubmitted, setExerciseSubmitted] = useState(false);
  const router = useRouter();

  const sections = [
    {
      title: "Why Multi-Agent Systems?",
      content: `Single AI agents have limitations. Multi-agent systems delegate complex problems to specialized agents, each excelling at specific tasks.

      <div class="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <h4 class="text-blue-400 font-semibold mb-2">The Power of Specialization</h4>
        <p class="text-slate-300 text-sm">Just as a software team has frontend engineers, backend engineers, and DevOps, multi-agent systems assign specialized roles to different AI agents.</p>
      </div>

      <div class="mt-6 grid md:grid-cols-3 gap-4">
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">🔍 Research Agent</h4>
          <p class="text-slate-400 text-sm">Gathers information, searches docs, retrieves context</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">✍️ Writing Agent</h4>
          <p class="text-slate-400 text-sm">Generates content, drafts code, creates summaries</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">✓ Verification Agent</h4>
          <p class="text-slate-400 text-sm">Reviews outputs, checks quality, validates correctness</p>
        </div>
      </div>`,
    },
    {
      title: "Agent Communication Patterns",
      content: `How agents talk to each other determines system effectiveness.

      <div class="mt-6 space-y-4">
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Sequential Pipeline</h4>
          <p class="text-slate-400 text-sm">Agent A → Agent B → Agent C. Simple, linear workflow. Good for linear processes.</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Supervisor Pattern</h4>
          <p class="text-slate-400 text-sm">Supervisor delegates to specialists. Good for complex, dynamic task routing.</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Debate/Consensus</h4>
          <p class="text-slate-400 text-sm">Multiple agents propose solutions, debate, reach consensus. Good for high-stakes decisions.</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">Tool-Using Network</h4>
          <p class="text-slate-400 text-sm">Agents share tools and resources. Good for research and exploration tasks.</p>
        </div>
      </div>`,
    },
    {
      title: "Designing Agent Roles",
      content: `Effective agents need clear roles. Each agent should have:

      <div class="mt-6 space-y-3">
        <div class="flex items-start gap-3">
          <span class="text-amber-400 font-bold">1.</span>
          <div>
            <h4 class="text-white font-semibold">Clear Persona</h4>
            <p class="text-slate-400 text-sm">Specific expertise, tone, and perspective</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-amber-400 font-bold">2.</span>
          <div>
            <h4 class="text-white font-semibold">Defined Responsibilities</h4>
            <p class="text-slate-400 text-sm">What they're responsible for, what they ignore</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-amber-400 font-bold">3.</span>
          <div>
            <h4 class="text-white font-semibold">Output Format</h4>
            <p class="text-slate-400 text-sm">How they should deliver results to the next agent</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-amber-400 font-bold">4.</span>
          <div>
            <h4 class="text-white font-semibold">Escalation Criteria</h4>
            <p class="text-slate-400 text-sm">When to ask for human help or retry</p>
          </div>
        </div>
      </div>`,
    },
    {
      title: "Interactive Exercise",
      content: `Design a multi-agent system for automated code review. Consider:

      <div class="mt-4 p-4 bg-slate-900 border border-slate-700 rounded-lg mb-6">
        <p class="text-slate-300">Question: What agents would you create and how would they communicate?</p>
      </div>

      <p class="text-slate-400 text-sm mb-4">Describe your agent system design:</p>
      
      <textarea
        value={exerciseAnswer}
        onChange={(e) => setExerciseAnswer(e.target.value)}
        className="w-full h-40 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
        placeholder="List your agents and their communication pattern..."
      />
      
      ${exerciseSubmitted ? `
        <div class="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h4 class="text-green-400 font-semibold mb-2">✓ Design Submitted</h4>
          <p class="text-slate-300 text-sm">Your multi-agent system design has been recorded. Consider: What agents handle security scanning, style checking, and performance analysis? How do they pass findings to each other?</p>
        </div>
      ` : ''}`,
    },
  ];

  const handleSectionComplete = () => {
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
      updateModuleProgress(6, Math.round(((completedSections.length + 1) / sections.length) * 100));
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
    completeModule(6);
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
            <span className="text-slate-400">Module 6 of 7</span>
            <span className="text-amber-400">•</span>
            <span className="text-amber-400">Multi-Agent Systems</span>
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
                placeholder="List your agents and their communication pattern..."
              />
              <button
                onClick={submitExercise}
                disabled={exerciseAnswer.length < 50}
                className="mt-4 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Submit Design
              </button>
              {exerciseSubmitted && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <h4 className="text-green-400 font-semibold mb-2">✓ Design Submitted</h4>
                  <p className="text-slate-300 text-sm">Your multi-agent system design has been recorded.</p>
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
