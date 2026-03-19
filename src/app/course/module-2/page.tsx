"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const pillars = [
  {
    id: "task",
    title: "1. Task",
    icon: "🎯",
    definition: "The specific action you want the AI to perform",
    examples: {
      weak: "Do something with my data",
      strong: "Analyze the CSV file and calculate monthly revenue trends",
    },
    exercise: "Write a specific task for generating an API endpoint",
  },
  {
    id: "context",
    title: "2. Context",
    icon: "📋",
    definition: "Background information the AI needs to execute the task correctly",
    examples: {
      weak: "Fix my code",
      strong: "Fix the authentication middleware - it's returning 401 on valid tokens after we migrated to JWT",
    },
    exercise: "Add context to: \"Write a function to sort users\"",
  },
  {
    id: "persona",
    title: "3. Persona",
    icon: "👤",
    definition: "The role, expertise level, and tone the AI should adopt",
    examples: {
      weak: "Explain this to me",
      strong: "Explain this as a senior backend engineer would, focusing on scalability concerns",
    },
    exercise: "Define persona for explaining database normalization",
  },
  {
    id: "format",
    title: "4. Format",
    icon: "📐",
    definition: "The expected output structure and presentation",
    examples: {
      weak: "Give me the numbers",
      strong: "Return a JSON object with keys: total_revenue, monthly_breakdown[], YoY_change_percent",
    },
    exercise: "Specify format for a code review summary",
  },
  {
    id: "examples",
    title: "5. Examples",
    icon: "📝",
    definition: "Input-output pairs that demonstrate expected behavior",
    examples: {
      weak: "Make it like other APIs",
      strong: "Like this: GET /users → { id, name, email, created_at }",
    },
    exercise: "Add examples to: \"Parse this date format\"",
  },
];

export default function Module2Page() {
  const [activePillar, setActivePillar] = useState(0);
  const [exerciseInputs, setExerciseInputs] = useState<Record<number, string>>({});
  const [submittedExercises, setSubmittedExercises] = useState<Record<number, boolean>>({});
  const [completedPillars, setCompletedPillars] = useState<number[]>([]);
  const router = useRouter();

  const submitExercise = (pillarIndex: number) => {
    setSubmittedExercises({ ...submittedExercises, [pillarIndex]: true });
    if (!completedPillars.includes(pillarIndex)) {
      setCompletedPillars([...completedPillars, pillarIndex]);
    }
  };

  const canProceed = completedPillars.length >= 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/course" className="text-xl font-bold text-amber-400">
            TAIC Digital Twin
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">Module 2 of 5</span>
            <span className="text-amber-400">•</span>
            <span className="text-amber-400">The 5 Pillars Framework</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            {pillars.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= activePillar
                    ? completedPillars.includes(i)
                      ? "bg-green-500"
                      : "bg-amber-500"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>
          <p className="text-slate-400 text-sm">
            {completedPillars.length}/5 pillars completed
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">The 5 Pillars Framework</h1>
          <p className="text-slate-300">
            Every precision prompt rests on five pillars. Master them all, and your AI communications 
            will transform from guesses into architectural specifications.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-2 mb-8">
          {pillars.map((pillar, i) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(i)}
              className={`p-4 rounded-xl text-left transition-all ${
                activePillar === i
                  ? "bg-amber-500/20 border-2 border-amber-500"
                  : completedPillars.includes(i)
                  ? "bg-green-500/10 border-2 border-green-500/50"
                  : "bg-slate-800/50 border-2 border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="text-2xl mb-2">{pillar.icon}</div>
              <div className={`text-sm font-semibold ${activePillar === i ? "text-amber-400" : "text-white"}`}>
                {pillar.title}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-4xl">{pillars[activePillar].icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{pillars[activePillar].title}</h2>
              <p className="text-slate-400 mt-1">{pillars[activePillar].definition}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <h4 className="text-red-400 font-semibold mb-2">⚠️ Weak Example</h4>
              <p className="text-slate-300 font-mono text-sm">{pillars[activePillar].examples.weak}</p>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <h4 className="text-green-400 font-semibold mb-2">✓ Strong Example</h4>
              <p className="text-slate-300 font-mono text-sm">{pillars[activePillar].examples.strong}</p>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <h4 className="text-amber-400 font-semibold mb-3">📝 Interactive Exercise</h4>
            <p className="text-slate-300 mb-4">{pillars[activePillar].exercise}</p>
            
            <textarea
              value={exerciseInputs[activePillar] || ""}
              onChange={(e) => setExerciseInputs({ ...exerciseInputs, [activePillar]: e.target.value })}
              className="w-full h-24 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
              placeholder="Write your answer here..."
            />
            
            <button
              onClick={() => submitExercise(activePillar)}
              disabled={!exerciseInputs[activePillar] || exerciseInputs[activePillar].length < 10}
              className="mt-4 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submittedExercises[activePillar] ? "✓ Completed" : "Submit Exercise"}
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => {
              if (activePillar > 0) setActivePillar(activePillar - 1);
            }}
            disabled={activePillar === 0}
            className="px-6 py-3 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous Pillar
          </button>
          
          {activePillar < pillars.length - 1 ? (
            <button
              onClick={() => setActivePillar(activePillar + 1)}
              className="px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Next Pillar →
            </button>
          ) : canProceed ? (
            <button
              onClick={() => router.push("/course/module-3")}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Complete Module → Continue to Module 3
            </button>
          ) : (
            <span className="px-6 py-3 text-slate-400">
              Complete at least 3 pillar exercises to continue
            </span>
          )}
        </div>
      </main>
    </div>
  );
}
