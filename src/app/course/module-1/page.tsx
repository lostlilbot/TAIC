"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProgress } from "@/hooks/useProgress";

export default function Module1Page() {
  const { completeModule, updateModuleProgress, progress, isLoaded } = useProgress();
  const [lessonState, setLessonState] = useState({
    currentSection: 0,
    completedSections: [] as number[],
    exerciseAnswer: "",
    exerciseSubmitted: false,
    exerciseScore: 0,
    improvedPrompt: "",
    showImproved: false,
  });
  const router = useRouter();

  const sections = [
    {
      title: "The Chatting Paradigm",
      content: `Most users interact with AI like this: "Write me some code" or "Explain Python." This is the <span class="text-amber-400">Chatting Paradigm</span>—treating AI as a conversational partner rather than a system to engineer.

      <div class="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
        <h4 class="text-red-400 font-semibold mb-2">⚠️ The Problem</h4>
        <p class="text-slate-300 text-sm">Chatting produces inconsistent, unpredictable results. It's like giving directions to a stranger: "Somewhere over there." You might get lucky, but you won't get reliability.</p>
      </div>`,
    },
    {
      title: "What is Agentic Engineering?",
      content: `Agentic Engineering is the discipline of designing AI systems that can <span class="text-amber-400">autonomously decompose complex tasks</span>, execute workflows, and verify their own outputs.

      <div class="mt-6 grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">🔧 Engineering</h4>
          <p class="text-slate-400 text-sm">Systematic design, explicit specifications, measurable outcomes</p>
        </div>
        <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h4 class="text-white font-semibold mb-2">🤖 Agentic</h4>
          <p class="text-slate-400 text-sm">Autonomous action, self-correction, goal-directed behavior</p>
        </div>
      </div>

      <p class="mt-6 text-slate-300">Think of it like military logistics vs. asking a friend for directions. Engineering produces <span class="text-green-400">replicable, auditable results</span>.</p>`,
    },
    {
      title: "The Intelligence Officer Mindset",
      content: `Your background as an intelligence officer isn't accidental to this methodology. Here's why:

      <div class="mt-6 space-y-4">
        <div class="flex gap-4">
          <div class="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <span class="text-amber-400 font-bold">1</span>
          </div>
          <div>
            <h4 class="text-white font-semibold">Sourcing Matters</h4>
            <p class="text-slate-400 text-sm">Intelligence officers know that source quality determines output quality. Garbage in, garbage out—doubly so with AI.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <span class="text-amber-400 font-bold">2</span>
          </div>
          <div>
            <h4 class="text-white font-semibold">Verification is Non-Negotiable</h4>
            <p class="text-slate-400 text-sm">Never trust a single source. Cross-reference, validate, verify. The same applies to AI outputs.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <span class="text-amber-400 font-bold">3</span>
          </div>
          <div>
            <h4 class="text-white font-semibold">Precision Enables Action</h4>
            <p class="text-slate-400 text-sm">"Move forces north" is useless. "Move 3 battalions to coordinates 14.5N, 90W by 0600" is actionable. Prompt engineering is about enabling AI action.</p>
          </div>
        </div>
      </div>`,
    },
    {
      title: "Interactive Exercise",
      content: `<p class="text-slate-300 mb-6">Analyze the following prompt and identify what's wrong with it:</p>
      
      <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg mb-6">
        <p class="text-slate-300 font-mono text-sm">"Write me a function to process user data"</p>
      </div>

      <p class="text-slate-400 text-sm mb-4">Submit your analysis (minimum 2 issues):</p>
      
      <textarea
        value={lessonState.exerciseAnswer}
        onChange={(e) => setLessonState({ ...lessonState, exerciseAnswer: e.target.value })}
        className="w-full h-32 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
        placeholder="List at least 2 problems with this prompt..."
      />
      
      ${lessonState.exerciseSubmitted ? `
        <div class="mt-4 p-4 ${lessonState.exerciseScore >= 2 ? 'bg-green-500/10 border border-green-500/20' : 'bg-amber-500/10 border border-amber-500/20'} rounded-lg">
          <h4 class="font-semibold mb-2 ${lessonState.exerciseScore >= 2 ? 'text-green-400' : 'text-amber-400'}">
            ${lessonState.exerciseScore >= 2 ? '✓ Good Analysis' : 'Keep Analyzing'}
          </h4>
          <p class="text-slate-300 text-sm">
            ${lessonState.exerciseScore >= 2 
              ? 'You identified key issues: vague task, missing context, no format specification, no examples. This is the chatting paradigm in action.'
              : 'Try again. Consider: What exactly should the function do? What kind of data? What should it return? What format?'}
          </p>
        </div>
      ` : ''}`,
    },
  ];

  const handleSectionComplete = () => {
    if (!lessonState.completedSections.includes(lessonState.currentSection)) {
      setLessonState({
        ...lessonState,
        completedSections: [...lessonState.completedSections, lessonState.currentSection],
      });
      updateModuleProgress(1, Math.round(((lessonState.completedSections.length + 1) / sections.length) * 100));
    }
    if (lessonState.currentSection < sections.length - 1) {
      setLessonState({ ...lessonState, currentSection: lessonState.currentSection + 1 });
    }
  };

  const handleModuleComplete = () => {
    completeModule(1);
    router.push("/course/module-2");
  };

  const submitExercise = () => {
    const answer = lessonState.exerciseAnswer.toLowerCase();
    const issues = [
      "vague", "unclear", "ambiguous", "missing", "no", "what", "which", 
      "undefined", "unspecified", "generic", "broad"
    ];
    const score = issues.filter(i => answer.includes(i)).length;
    setLessonState({
      ...lessonState,
      exerciseSubmitted: true,
      exerciseScore: Math.min(score, 3),
    });
  };

  const isSectionComplete = lessonState.currentSection < sections.length - 1 
    ? lessonState.completedSections.includes(lessonState.currentSection)
    : lessonState.exerciseSubmitted;

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
            <span className="text-slate-400">Module 1 of 5</span>
            <span className="text-amber-400">•</span>
            <span className="text-amber-400">From Chatting to Agentic Engineering</span>
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
                  i <= lessonState.currentSection
                    ? "bg-amber-500"
                    : lessonState.completedSections.includes(i)
                    ? "bg-green-500"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {sections[lessonState.currentSection].title}
          </h1>
          
          <div 
            className="prose prose-invert max-w-none mt-6"
            dangerouslySetInnerHTML={{ 
              __html: lessonState.currentSection === sections.length - 1 && !lessonState.exerciseSubmitted
                ? sections[sections.length - 1].content.replace(
                    /<textarea[\s\S]*?<\/textarea>/,
                    ''
                  ).replace(
                    /\$\{lessonState\.exerciseSubmitted[\s\S]*?\}\s*/,
                    ''
                  )
                : sections[lessonState.currentSection].content 
            }}
          />

          {lessonState.currentSection === sections.length - 1 && (
            <div className="mt-6">
              <textarea
                value={lessonState.exerciseAnswer}
                onChange={(e) => setLessonState({ ...lessonState, exerciseAnswer: e.target.value })}
                className="w-full h-32 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
                placeholder="List at least 2 problems with this prompt..."
              />
              <button
                onClick={submitExercise}
                disabled={lessonState.exerciseAnswer.length < 20}
                className="mt-4 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Submit Analysis
              </button>
              {lessonState.exerciseSubmitted && (
                <div className={`mt-4 p-4 ${lessonState.exerciseScore >= 2 ? 'bg-green-500/10 border border-green-500/20' : 'bg-amber-500/10 border border-amber-500/20'} rounded-lg`}>
                  <h4 className={`font-semibold mb-2 ${lessonState.exerciseScore >= 2 ? 'text-green-400' : 'text-amber-400'}`}>
                    {lessonState.exerciseScore >= 2 ? '✓ Good Analysis' : 'Keep Analyzing'}
                  </h4>
                  <p className="text-slate-300 text-sm">
                    {lessonState.exerciseScore >= 2 
                      ? 'You identified key issues: vague task, missing context, no format specification, no examples. This is the chatting paradigm in action.'
                      : 'Try again. Consider: What exactly should the function do? What kind of data? What should it return? What format?'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => {
              if (lessonState.currentSection > 0) {
                setLessonState({ ...lessonState, currentSection: lessonState.currentSection - 1 });
              }
            }}
            disabled={lessonState.currentSection === 0}
            className="px-6 py-3 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          
          {lessonState.currentSection < sections.length - 1 ? (
            <button
              onClick={handleSectionComplete}
              className="px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Next Section →
            </button>
          ) : lessonState.exerciseSubmitted ? (
            <button
              onClick={handleModuleComplete}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Complete Module → Continue to Module 2
            </button>
          ) : null}
        </div>
      </main>
    </div>
  );
}
