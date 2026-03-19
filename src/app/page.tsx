import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4 md:mb-6 border border-amber-500/30">
            TAIC Certification - Global AI Standards
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            Master <span className="text-amber-400">Technical AI</span> Communication
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 md:mb-10">
            Transform your career with global AI standards. Learn the TAIC methodology 
            and become a certified AI Architect. Local experts, global standards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/course"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/25 text-center"
            >
              Start TAIC Certification
            </Link>
            <Link
              href="#roadmap"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors text-center"
            >
              View Roadmap
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-20">
          <div className="p-5 md:p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <div className="text-3xl mb-3 md:mb-4">🎯</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">5 Pillars Framework</h3>
            <p className="text-slate-400 text-sm md:text-base">
              Master Task, Context, Persona, Format, and Examples—the backbone of precision prompts.
            </p>
          </div>
          <div className="p-5 md:p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <div className="text-3xl mb-3 md:mb-4">⚙️</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Agentic Engineering</h3>
            <p className="text-slate-400 text-sm md:text-base">
              Design AI systems that autonomously decompose, execute, and verify complex tasks.
            </p>
          </div>
          <div className="p-5 md:p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <div className="text-3xl mb-3 md:mb-4">🌊</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Resilient Workflows</h3>
            <p className="text-slate-400 text-sm md:text-base">
              Handle AI hallucinations with a problem-solving mindset.
            </p>
          </div>
        </div>

        <div id="roadmap" className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
            TAIC Certification Roadmap
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="flex-1">
              <div className="space-y-4">
                {[
                  { 
                    step: 1, 
                    title: "TAIC Fundamentals", 
                    desc: "Modules 1-2: From Chatting to Agentic Engineering + 5 Pillars Framework",
                    time: "2-3 hours"
                  },
                  { 
                    step: 2, 
                    title: "Agentic Workflows", 
                    desc: "Module 3: Decomposition, orchestration, verification, and learning loops",
                    time: "2-3 hours"
                  },
                  { 
                    step: 3, 
                    title: "Resilient Workflows", 
                    desc: "Module 4: Hallucination detection and recovery",
                    time: "1-2 hours"
                  },
                  { 
                    step: 4, 
                    title: "Certification Assessment", 
                    desc: "Module 5: 3 practical challenges, 70% to pass",
                    time: "1-2 hours"
                  },
                  { 
                    step: 5, 
                    title: "Multi-Agent Systems", 
                    desc: "Module 6: Designing and orchestrating multiple AI agents",
                    time: "2-3 hours"
                  },
                  { 
                    step: 6, 
                    title: "Production Best Practices", 
                    desc: "Module 7: Reliability, security, and cost optimization",
                    time: "2-3 hours"
                  },
                ].map((item, idx) => (
                  <div key={item.step} className="relative flex gap-4">
                    {idx < 5 && (
                      <div className="absolute left-5 top-10 w-0.5 h-12 md:h-16 bg-slate-700"></div>
                    )}
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                      {item.step}
                    </div>
                    <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-1">
                        <h4 className="text-white font-semibold text-sm md:text-base">{item.title}</h4>
                        <span className="text-xs md:text-sm text-amber-400 whitespace-nowrap">{item.time}</span>
                      </div>
                      <p className="text-slate-400 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-5 md:p-6 sticky top-24">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4">Your Path to Certification</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Total Estimated Duration:</span>
                    <span className="text-amber-400 font-semibold">10-16 hours</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Modules:</span>
                    <span className="text-amber-400 font-semibold">7 modules</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Interactive Exercises:</span>
                    <span className="text-amber-400 font-semibold">7+</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Final Exam:</span>
                    <span className="text-amber-400 font-semibold">3 challenges</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-slate-700">
                  <Link
                    href="/course"
                    className="block w-full py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors text-center text-sm md:text-base"
                  >
                    Start Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 p-6 md:p-8 bg-slate-800/30 border border-slate-700 rounded-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">TAIC Course Modules</h2>
          <div className="space-y-3 md:space-y-4">
            {[
              { num: 1, title: "From Chatting to Agentic Engineering" },
              { num: 2, title: "The 5 Pillars Framework" },
              { num: 3, title: "Agentic Workflows" },
              { num: 4, title: "Resilient Workflows: Handling Hallucinations" },
              { num: 5, title: "Certification Assessment" },
              { num: 6, title: "Multi-Agent Systems" },
              { num: 7, title: "Production Best Practices" },
            ].map((module) => (
              <div key={module.num} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-slate-800/50 rounded-lg">
                <span className="w-8 h-8 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {module.num}
                </span>
                <span className="text-white text-sm md:text-base">{module.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-slate-500 text-sm">
            TAIC Digital Twin Methodology • Certification-Ready Curriculum • Global AI Standards for Local Experts
          </p>
        </div>
      </div>
    </main>
  );
}
