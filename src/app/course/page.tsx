"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProgress } from "@/hooks/useProgress";

const modules = [
  { id: 1, title: "From Chatting to Agentic Engineering", description: "Understand the fundamental shift from passive AI querying to active AI system design.", icon: "🎯" },
  { id: 2, title: "The 5 Pillars Framework", description: "Master Task, Context, Persona, Format, and Examples.", icon: "🏛️" },
  { id: 3, title: "Agentic Workflows", description: "Design systems that decompose, execute, and verify complex tasks.", icon: "⚙️" },
  { id: 4, title: "Resilient Workflows: Handling Hallucinations", description: "Develop problem-solving mindset to detect and correct AI errors.", icon: "🌊" },
  { id: 5, title: "Certification Assessment", description: "Demonstrate mastery through real-world practical challenges.", icon: "🎓" },
  { id: 6, title: "Multi-Agent Systems", description: "Design and orchestrate multiple AI agents working together.", icon: "🤝" },
  { id: 7, title: "Production Best Practices", description: "Reliability, security, and cost optimization for production AI systems.", icon: "🚀" },
];

const modulePreviews: Record<number, string> = {
  1: "Learn the difference between using AI and designing AI systems. The chatting paradigm vs. agentic engineering.",
  2: "The 5 pillars: Specific Task, Relevant Context, Defined Persona, Structured Format, Clear Examples.",
  3: "Decomposition, orchestration, verification, and learning loops. Patterns: ReAct, Tool-Using, Planning.",
  4: "Hallucination detection, validation strategies, recovery protocols, constructive correction.",
  5: "3 practical challenges. 70% to pass. Demonstrate your TAIC mastery.",
  6: "Agent communication patterns, role design, specialized systems.",
  7: "Error handling, cost optimization, security, observability in production.",
};

export default function CoursePage() {
  const { progress, completeModule, isLoaded } = useProgress();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"modules" | "materials" | "about">("modules");
  const [quickViewModule, setQuickViewModule] = useState<number | null>(null);

  const handleModuleComplete = (moduleId: number) => {
    completeModule(moduleId);
  };

  const progressPercent = Math.round((progress.completedModules.length / modules.length) * 100);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-lg md:text-xl font-bold text-amber-400">
              TAIC
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => setActiveTab("modules")} className={`${activeTab === "modules" ? "text-amber-400" : "text-slate-400 hover:text-white"}`}>Course</button>
              <button onClick={() => setActiveTab("materials")} className={`${activeTab === "materials" ? "text-amber-400" : "text-slate-400 hover:text-white"}`}>Materials</button>
              <button onClick={() => setActiveTab("about")} className={`${activeTab === "about" ? "text-amber-400" : "text-slate-400 hover:text-white"}`}>About</button>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-slate-400 hidden sm:block">
                <span className="text-amber-400 font-semibold">{progressPercent}%</span> complete
              </div>
              <div className="w-20 md:w-32 h-1.5 md:h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          </div>
          <div className="md:hidden flex gap-4 mt-3 pb-2 overflow-x-auto">
            <button onClick={() => setActiveTab("modules")} className={`text-sm whitespace-nowrap ${activeTab === "modules" ? "text-amber-400" : "text-slate-400"}`}>Course</button>
            <button onClick={() => setActiveTab("materials")} className={`text-sm whitespace-nowrap ${activeTab === "materials" ? "text-amber-400" : "text-slate-400"}`}>Materials</button>
            <button onClick={() => setActiveTab("about")} className={`text-sm whitespace-nowrap ${activeTab === "about" ? "text-amber-400" : "text-slate-400"}`}>About</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {activeTab === "modules" && (
          <>
            <div className="text-center mb-10 md:mb-14">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                TAIC Certification Course
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
                Transform your career with <span className="text-amber-400">global AI standards</span>. 
                TAIC methodology for <span className="text-amber-400">technical professionals</span>.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm text-slate-400">
                <span className="px-2 md:px-3 py-1 bg-slate-800 rounded-full border border-slate-700">7 Modules</span>
                <span className="px-2 md:px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Interactive Exercises</span>
                <span className="px-2 md:px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Certification</span>
              </div>
            </div>

            <div className="mb-6 p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-sm md:text-base">Module Quick View</h3>
                <span className="text-xs text-slate-500">Click to preview</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {modules.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setQuickViewModule(quickViewModule === m.id ? null : m.id)}
                    className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs md:text-sm transition-all ${
                      quickViewModule === m.id 
                        ? "bg-amber-500/20 border border-amber-500 text-amber-400" 
                        : "bg-slate-700/50 border border-slate-600 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <span className="mr-1">{m.icon}</span> M{m.id}
                  </button>
                ))}
              </div>
              {quickViewModule && (
                <div className="mt-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                  <p className="text-slate-300 text-xs md:text-sm">{modulePreviews[quickViewModule]}</p>
                </div>
              )}
            </div>

            <div className="grid gap-4 md:gap-6">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  className="group relative bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <div className="flex items-start gap-3 md:gap-6">
                    <div className="text-2xl md:text-4xl">{module.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <span className="text-xs md:text-sm font-mono text-slate-500">MODULE {module.id}</span>
                        {progress.completedModules.includes(module.id) && (
                          <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30">Completed</span>
                        )}
                      </div>
                      <h2 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-amber-400 transition-colors">
                        {module.title}
                      </h2>
                      <p className="text-slate-400 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">{module.description}</p>
                      <Link
                        href={`/course/module-${module.id}`}
                        className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm md:text-base"
                      >
                        {progress.completedModules.includes(module.id) ? "Review Module" : "Start Module"}
                        <span>→</span>
                      </Link>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-700 group-hover:bg-amber-500/20 transition-colors">
                      <span className="text-slate-400 group-hover:text-amber-400 font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-16 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Ready for Certification?</h3>
              <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base">
                Complete all 7 modules and pass the final assessment to earn your 
                TAIC Certification. This credential demonstrates your ability to design 
                and manage AI-driven workflows in any technical environment.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => router.push("/course/module-5")}
                  disabled={progress.completedModules.length < 4}
                  className={`px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                    progress.completedModules.length < 4
                      ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                      : "bg-amber-500 text-slate-900 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25"
                  }`}
                >
                  {progress.completedModules.length < 4 
                    ? `Complete ${5 - progress.completedModules.length} more module(s)`
                    : "Begin Certification Assessment"
                  }
                </button>
                <span className="text-xs md:text-sm text-slate-400">
                  {progress.completedModules.length}/4 modules required
                </span>
              </div>
            </div>
          </>
        )}

        {activeTab === "materials" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8">
              <div className="text-4xl mb-4">📖</div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">TAIC Handbook</h2>
              <p className="text-slate-400 mb-4 text-sm md:text-base">
                Complete guide to evaluation criteria and methodological reference.
              </p>
              <a href="/content/taic-handbook.md" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium">
                View Handbook <span>→</span>
              </a>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8">
              <div className="text-4xl mb-4">📝</div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Student Workbook</h2>
              <p className="text-slate-400 mb-4 text-sm md:text-base">
                Practical exercises and templates for your learning journey.
              </p>
              <a href="/content/student-workbook.md" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium">
                View Workbook <span>→</span>
              </a>
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">About TAIC</h2>
            <div className="space-y-6 text-slate-300">
              <p>
                <span className="text-amber-400 font-semibold">TAIC (Technical AI Communication)</span> is a professional methodology 
                for effectively communicating with Artificial Intelligence systems.
              </p>
              <p>
                Developed for technical professionals who need <span className="text-white">global standards</span>{" "}
                in designing and managing AI workflows.
              </p>
              <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                <h3 className="text-white font-semibold mb-2">TAIC Platform</h3>
                <p className="text-sm text-slate-400">
                  Bringing global AI standards to technical professionals worldwide. Our mission is to equip 
                  professionals with the most in-demand skills in the global AI market.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg text-center">
                  <div className="text-2xl text-amber-400 font-bold">7</div>
                  <div className="text-slate-400 text-sm">Modules</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg text-center">
                  <div className="text-2xl text-amber-400 font-bold">10-16h</div>
                  <div className="text-slate-400 text-sm">Duration</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg text-center">
                  <div className="text-2xl text-amber-400 font-bold">70%</div>
                  <div className="text-slate-400 text-sm">To Pass</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg text-center">
                  <div className="text-2xl text-amber-400 font-bold">3</div>
                  <div className="text-slate-400 text-sm">Challenges</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
