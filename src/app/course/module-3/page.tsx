"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const workflowSteps = [
  {
    title: "Decomposition",
    description: "Break complex tasks into atomic, executable subtasks",
    icon: "🔪",
    example: "Build an e-commerce API → 1) Design DB schema, 2) Create auth endpoints, 3) Build product CRUD, 4) Implement cart, 5) Add payment integration",
    pattern: "Task → [Subtask 1, Subtask 2, Subtask 3...]",
  },
  {
    title: "Orchestration",
    description: "Define execution order and dependencies between subtasks",
    icon: "⚡",
    example: "Auth must complete before product access. Cart depends on both.",
    pattern: "Sequential / Parallel / Dependent chains",
  },
  {
    title: "Verification",
    description: "Build self-checking mechanisms into the workflow",
    icon: "✅",
    example: "If output doesn't match schema → retry. If tests fail → rollback.",
    pattern: "Assert → Validate → Correct",
  },
  {
    title: "Loop & Learn",
    description: "Create feedback loops that improve future executions",
    icon: "🔄",
    example: "Store failed attempts. On retry, include context from previous failures.",
    pattern: "Execute → Evaluate → Adapt → Re-execute",
  },
];

const agentPatterns = [
  {
    name: "ReAct Agent",
    description: "Reasoning + Acting in loops",
    useCase: "Complex multi-step problem solving",
  },
  {
    name: "Tool-Using Agent",
    description: "Calls external functions/APIs autonomously",
    useCase: "Database queries, file operations, API calls",
  },
  {
    name: "Planning Agent",
    description: "Creates and revises action plans",
    useCase: "Large projects requiring roadmap",
  },
  {
    name: "Critique Agent",
    description: "Evaluates outputs of other agents",
    useCase: "Quality control in agentic systems",
  },
];

export default function Module3Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [exerciseInput, setExerciseInput] = useState("");
  const [exerciseSubmitted, setExerciseSubmitted] = useState(false);
  const router = useRouter();

  const handleComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < workflowSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const submitExercise = () => {
    setExerciseSubmitted(true);
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const canProceed = completedSteps.length >= 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/course" className="text-xl font-bold text-amber-400">
            TAIC Digital Twin
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">Module 3 of 5</span>
            <span className="text-amber-400">•</span>
            <span className="text-amber-400">Agentic Workflows</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            {[...Array(workflowSteps.length + 1)].map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= currentStep
                    ? completedSteps.includes(i) || (i === currentStep && !exerciseSubmitted)
                      ? "bg-green-500"
                      : "bg-amber-500"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Agentic Workflows</h1>
          <p className="text-slate-300">
            Agentic Engineering isn&apos;t about better prompts—its about designing systems where AI 
            can autonomously decompose, execute, and verify complex tasks. This is where you 
            become an <span className="text-amber-400">AI Architect</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-3 mb-8">
          {workflowSteps.map((step, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentStep(i);
                setExerciseSubmitted(false);
              }}
              className={`p-4 rounded-xl text-center transition-all ${
                currentStep === i
                  ? "bg-amber-500/20 border-2 border-amber-500"
                  : completedSteps.includes(i)
                  ? "bg-green-500/10 border-2 border-green-500/50"
                  : "bg-slate-800/50 border-2 border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="text-2xl mb-1">{step.icon}</div>
              <div className={`text-sm font-semibold ${currentStep === i ? "text-amber-400" : "text-white"}`}>
                {step.title}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{workflowSteps[currentStep].icon}</span>
            <h2 className="text-2xl font-bold text-white">{workflowSteps[currentStep].title}</h2>
          </div>

          <p className="text-slate-300 text-lg mb-6">{workflowSteps[currentStep].description}</p>

          <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg mb-4">
            <h4 className="text-slate-400 text-sm mb-2">Example</h4>
            <p className="text-white">{workflowSteps[currentStep].example}</p>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <h4 className="text-amber-400 text-sm mb-2">Pattern</h4>
            <p className="text-slate-300 font-mono">{workflowSteps[currentStep].pattern}</p>
          </div>

          {currentStep === workflowSteps.length - 1 && (
            <div className="mt-6 border-t border-slate-700 pt-6">
              <h4 className="text-amber-400 font-semibold mb-3">📝 Exercise: Decompose This Task</h4>
              <p className="text-slate-300 mb-4">Break down: &quot;Build a user authentication system with OAuth and JWT&quot;</p>
              <textarea
                value={exerciseInput}
                onChange={(e) => setExerciseInput(e.target.value)}
                className="w-full h-24 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
                placeholder="List the subtasks in order..."
              />
              <button
                onClick={submitExercise}
                disabled={exerciseInput.length < 50}
                className="mt-4 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {exerciseSubmitted ? "✓ Completed" : "Submit Decomposition"}
              </button>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Agent Patterns Reference</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {agentPatterns.map((pattern, i) => (
              <div key={i} className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
                <h4 className="text-amber-400 font-semibold">{pattern.name}</h4>
                <p className="text-slate-400 text-sm">{pattern.description}</p>
                <p className="text-slate-500 text-xs mt-2">Use case: {pattern.useCase}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => {
              if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
                setExerciseSubmitted(false);
              }
            }}
            disabled={currentStep === 0}
            className="px-6 py-3 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          
          {currentStep < workflowSteps.length - 1 ? (
            <button
              onClick={handleComplete}
              className="px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Next Step →
            </button>
          ) : exerciseSubmitted || canProceed ? (
            <button
              onClick={() => router.push("/course/module-4")}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Complete Module → Continue to Module 4
            </button>
          ) : (
            <span className="px-6 py-3 text-slate-400">
              Complete this exercise to continue
            </span>
          )}
        </div>
      </main>
    </div>
  );
}
