"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const modules = [
  {
    id: 1,
    title: "From Chatting to Agentic Engineering",
    description: "Understand the fundamental shift from passive AI querying to active AI system design.",
    icon: "🎯",
    status: "available" as const,
  },
  {
    id: 2,
    title: "The 5 Pillars Framework",
    description: "Master Task, Context, Persona, Format, and Examples—the backbone of precision prompts.",
    icon: "🏛️",
    status: "available" as const,
  },
  {
    id: 3,
    title: "Agentic Workflows",
    description: "Design AI systems that autonomously decompose, execute, and verify complex tasks.",
    icon: "⚙️",
    status: "available" as const,
  },
  {
    id: 4,
    title: "Vida Resiliente: Handling Hallucinations",
    description: "Develop problem-solving mindsets to detect, validate, and correct AI errors.",
    icon: "🌊",
    status: "available" as const,
  },
  {
    id: 5,
    title: "Certification Assessment",
    description: "Demonstrate mastery through real-world prompt engineering challenges.",
    icon: "🎓",
    status: "available" as const,
  },
];

export default function CoursePage() {
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const router = useRouter();

  const handleModuleComplete = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const progress = Math.round((completedModules.length / modules.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-amber-400">
            TAIC Digital Twin
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-400">
              Progress: <span className="text-amber-400 font-semibold">{progress}%</span>
            </div>
            <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TAIC Certification Course
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transform from an AI <span className="text-amber-400">user</span> into an AI{" "}
            <span className="text-amber-400">Architect</span>. Master the art of Technical 
            AI Communication through rigorous, intelligence-driven methodology.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-400">
            <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
              5 Modules
            </span>
            <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
              Interactive Exercises
            </span>
            <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
              Certification Ready
            </span>
          </div>
        </div>

        <div className="grid gap-6">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className="group relative bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl">{module.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-slate-500">
                      MODULE {module.id}
                    </span>
                    {completedModules.includes(module.id) && (
                      <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                        Completed
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {module.title}
                  </h2>
                  <p className="text-slate-400 mb-4">{module.description}</p>
                  <Link
                    href={`/course/module-${module.id}`}
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium"
                  >
                    {completedModules.includes(module.id) ? "Review Module" : "Start Module"}
                    <span>→</span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-700 group-hover:bg-amber-500/20 transition-colors">
                  <span className="text-slate-400 group-hover:text-amber-400 font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Ready for Certification?</h3>
          <p className="text-slate-300 mb-6">
            Complete all 5 modules and pass the final assessment to earn your 
            TAIC Certification. This credential demonstrates your ability to design 
            and manage AI-driven workflows in any technical environment.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/course/module-5")}
              disabled={completedModules.length < 4}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                completedModules.length < 4
                  ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                  : "bg-amber-500 text-slate-900 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25"
              }`}
            >
              {completedModules.length < 4 
                ? `Complete ${5 - completedModules.length} more module(s)`
                : "Begin Certification Assessment"
              }
            </button>
            <span className="text-sm text-slate-400">
              {completedModules.length}/4 modules required
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
