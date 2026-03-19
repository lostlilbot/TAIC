import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-6 border border-amber-500/30">
            TAIC Digital Twin
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Master <span className="text-amber-400">Technical AI</span> Communication
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Transform from an AI <span className="text-amber-400">user</span> into an AI{" "}
            <span className="text-amber-400">Architect</span>. Learn the discipline, methodology, 
            and mindset to engineer AI-driven workflows.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/course"
              className="px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/25"
            >
              Start Certification Course
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">5 Pillars Framework</h3>
            <p className="text-slate-400">
              Master Task, Context, Persona, Format, and Examples—the backbone of precision prompts.
            </p>
          </div>
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-white mb-2">Agentic Engineering</h3>
            <p className="text-slate-400">
              Design AI systems that autonomously decompose, execute, and verify complex tasks.
            </p>
          </div>
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <div className="text-3xl mb-4">🌊</div>
            <h3 className="text-xl font-bold text-white mb-2">Vida Resiliente</h3>
            <p className="text-slate-400">
              Handle AI hallucinations with problem-solving mindset, not frustration.
            </p>
          </div>
        </div>

        <div className="mt-20 p-8 bg-slate-800/30 border border-slate-700 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
          <div className="space-y-4">
            {[
              { num: 1, title: "From Chatting to Agentic Engineering" },
              { num: 2, title: "The 5 Pillars Framework" },
              { num: 3, title: "Agentic Workflows" },
              { num: 4, title: "Vida Resiliente: Handling Hallucinations" },
              { num: 5, title: "Certification Assessment" },
            ].map((module) => (
              <div key={module.num} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                <span className="w-8 h-8 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center font-bold">
                  {module.num}
                </span>
                <span className="text-white">{module.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            Powered by TAIC Digital Twin methodology • Certification-ready curriculum
          </p>
        </div>
      </div>
    </main>
  );
}
