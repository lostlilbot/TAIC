"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const sections = [
  {
    title: "What Are Hallucinations?",
    content: `Hallucinations are AI outputs that sound confident but are factually incorrect. They're not "bugs"—they're a fundamental characteristic of how LLMs work: <span class="text-amber-400">probability prediction</span>, not truth retrieval.

<div class="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
  <h4 class="text-blue-400 font-semibold mb-2">ℹ️ Key Insight</h4>
  <p class="text-slate-300 text-sm">LLMs predict the most likely next token, not the correct answer. They have no ground truth access. This is why verification is non-negotiable.</p>
</div>

<p class="mt-6 text-slate-300">In Honduras, we say <em>"No hay rosa sin espina"</em>—every rose has its thorn. AI capabilities come with limitations. Accept it. Engineer around it.</p>`,
  },
  {
    title: "The Vida Resiliente Mindset",
    content: `Vida Resiliente (Resilient Life) isn't just a philosophy—it's an operational framework:

<div class="mt-6 grid gap-4">
  <div class="flex gap-4">
    <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
      <span class="text-green-400 font-bold">1</span>
    </div>
    <div>
      <h4 class="text-white font-semibold">Don't Take It Personally</h4>
      <p class="text-slate-400 text-sm">AI errors aren't insults. They're data points. When your team member fails, you don't quit—you coach.</p>
    </div>
  </div>
  <div class="flex gap-4">
    <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
      <span class="text-green-400 font-bold">2</span>
    </div>
    <div>
      <h4 class="text-white font-semibold">Diagnose Before Reacting</h4>
      <p class="text-slate-400 text-sm">"It gave me wrong code" is useless. "It used an outdated API version" is actionable.</p>
    </div>
  </div>
  <div class="flex gap-4">
    <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
      <span class="text-green-400 font-bold">3</span>
    </div>
    <div>
      <h4 class="text-white font-semibold">Build Error Recovery Into Your Workflows</h4>
      <p class="text-slate-400 text-sm">Intelligence officers have contingency plans. So should your AI systems.</p>
    </div>
  </div>
</div>`,
  },
  {
    title: "Detection Strategies",
    content: `<h3 class="text-white font-semibold mb-4">How to Catch Hallucinations</h3>

<div class="space-y-4">
  <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
    <h4 class="text-amber-400 font-semibold mb-2">Cross-Reference</h4>
    <p class="text-slate-400 text-sm">Ask the AI to verify its own output against official documentation. "Show me where in the MDN docs this API is defined."</p>
  </div>
  <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
    <h4 class="text-amber-400 font-semibold mb-2">Step-by-Step Verification</h4>
    <p class="text-slate-400 text-sm">"Walk me through each line of this function and explain how it works." False claims fall apart under scrutiny.</p>
  </div>
  <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
    <h4 class="text-amber-400 font-semibold mb-2">Unit Tests as Reality Check</h4>
    <p class="text-slate-400 text-sm">Write tests that validate behavior, not implementation. If the AI's code passes your tests, it works—even if it looks different from expected.</p>
  </div>
  <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
    <h4 class="text-amber-400 font-semibold mb-2">Version-Specific Queries</h4>
    <p class="text-slate-400 text-sm">"In Python 3.11, how does asyncio.handle_exception work?" Specific versions reduce hallucination surface area.</p>
  </div>
</div>`,
  },
  {
    title: "Recovery Protocols",
    content: `<h3 class="text-white font-semibold mb-4">When You Catch a Hallucination</h3>

<div class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-6">
  <p class="text-slate-300"><span class="text-red-400 font-semibold">NEVER</span> just say "that's wrong." That's how you train bad habits. Instead, provide corrective context:</p>
</div>

<div class="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 mb-6">
<p class="text-green-400">// ❌ Counterproductive:</p>
<p>"That's wrong."</p>
<br/>
<p class="text-green-400">// ✅ Constructive Correction:</p>
<p>"The documentation shows that handle_exception was deprecated in Python 3.8. </p>
<p>Please rewrite using the current exception handling pattern for asyncio."</p>
</div>

<h4 class="text-amber-400 font-semibold mb-3">The Correction Template</h4>
<ol class="list-decimal list-inside space-y-2 text-slate-300">
  <li>Identify the specific error (not "wrong," but "uses deprecated API")</li>
  <li>Provide factual correction (link to docs, version number)</li>
  <li>Request re-generation with the correction</li>
  <li>Add verification step to prevent recurrence</li>
</ol>`,
  },
  {
    title: "Interactive Exercise",
    content: `<p class="text-slate-300 mb-6">You've asked an AI to write a function to connect to PostgreSQL using psycopg2. It returns code using <code>asyncpg</code> library instead. Write a constructive correction prompt.</p>
      
      <textarea
        className="w-full h-40 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
        placeholder="Write your corrective prompt here..."
      />`,
  },
];

export default function Module4Page() {
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [exerciseInput, setExerciseInput] = useState("");
  const [exerciseSubmitted, setExerciseSubmitted] = useState(false);
  const [exerciseScore, setExerciseScore] = useState(0);
  const router = useRouter();

  const handleSectionComplete = () => {
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const submitExercise = () => {
    const input = exerciseInput.toLowerCase();
    let score = 0;
    if (input.includes("asyncpg") || input.includes("wrong library")) score++;
    if (input.includes("psycopg2") || input.includes("specified")) score++;
    if (input.includes("please") || input.includes("rewrite") || input.includes("retry")) score++;
    
    setExerciseScore(Math.min(score, 3));
    setExerciseSubmitted(true);
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/course" className="text-xl font-bold text-amber-400">
            TAIC Digital Twin
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">Module 4 of 5</span>
            <span className="text-amber-400">•</span>
            <span className="text-amber-400">Vida Resiliente</span>
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
                    ? completedSections.includes(i)
                      ? "bg-green-500"
                      : "bg-amber-500"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Vida Resiliente: Handling Hallucinations
          </h1>
          <p className="text-slate-300">
            AI will fail. This module teaches you to treat failures as engineering problems, 
            not frustrations. The <span className="text-amber-400">Catracho</span> spirit: 
            adapt, overcome, build stronger.
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          <div className="mb-6">
            <span className="text-sm font-mono text-slate-500">
              Section {currentSection + 1} of {sections.length}
            </span>
            <h2 className="text-2xl font-bold text-white mt-2">
              {sections[currentSection].title}
            </h2>
          </div>

          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: sections[currentSection].content }}
          />

          {currentSection === sections.length - 1 && (
            <div className="mt-6 border-t border-slate-700 pt-6">
              <textarea
                value={exerciseInput}
                onChange={(e) => setExerciseInput(e.target.value)}
                className="w-full h-40 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
                placeholder="Write your corrective prompt here..."
              />
              <button
                onClick={submitExercise}
                disabled={exerciseInput.length < 30}
                className="mt-4 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Submit Correction
              </button>
              {exerciseSubmitted && (
                <div className={`mt-4 p-4 ${exerciseScore >= 2 ? 'bg-green-500/10 border border-green-500/20' : 'bg-amber-500/10 border border-amber-500/20'} rounded-lg`}>
                  <h4 className={`font-semibold mb-2 ${exerciseScore >= 2 ? 'text-green-400' : 'text-amber-400'}`}>
                    {exerciseScore >= 2 ? '✓ Excellent Correction' : 'Keep Practicing'}
                  </h4>
                  <p className="text-slate-300 text-sm">
                    {exerciseScore >= 2 
                      ? 'You provided specific, constructive feedback that identifies the library mismatch and requests correction.'
                      : 'Include: (1) What was wrong, (2) What you actually wanted, (3) A polite request to rewrite.'}
                  </p>
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
              onClick={() => router.push("/course/module-5")}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Complete Module → Certification Assessment
            </button>
          ) : null}
        </div>
      </main>
    </div>
  );
}
