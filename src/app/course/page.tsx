"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProgress } from "@/hooks/useProgress";

const modules = [
  { id: 1, title: "De Chatting a Ingeniería Agéntica", description: "Comprende el cambio fundamental de consulta pasiva a diseño de sistemas IA.", icon: "🎯" },
  { id: 2, title: "El Framework de 5 Pilares", description: "Domina Tarea, Contexto, Persona, Formato y Ejemplos.", icon: "🏛️" },
  { id: 3, title: "Flujos de Trabajo Agénticos", description: "Diseña sistemas que descomponen, ejecutan y verifican tareas complejas.", icon: "⚙️" },
  { id: 4, title: "Vida Resiliente: Alucinaciones", description: "Desarrolla mentalidad de resolución para detectar y corregir errores de IA.", icon: "🌊" },
  { id: 5, title: "Evaluación de Certificación", description: "Demonstra dominio a través de desafíos prácticos reales.", icon: "🎓" },
  { id: 6, title: "Sistemas Multi-Agente", description: "Diseña y orquesta múltiples agentes de IA trabajando juntos.", icon: "🤝" },
  { id: 7, title: "Mejores Prácticas de Producción", description: "Confiabilidad, seguridad y optimización para sistemas de IA en producción.", icon: "🚀" },
];

const modulePreviews: Record<number, string> = {
  1: "Aprende la diferencia entre usar IA y diseñar sistemas IA. El paradigma del chat vs. ingeniería agéntica.",
  2: "Los 5 pilares: Tarea específica, Contexto relevante, Persona definida, Formato estructurado, Ejemplos claros.",
  3: "Descomposición, orquestación, verificación y bucles de aprendizaje. Patrones: ReAct, Tool-Using, Planning.",
  4: "Detección de alucinaciones, estrategias de validación, protocolos de recuperación, corrección constructiva.",
  5: "3 desafíos prácticos. 70% para aprobar. Demuestra tu dominio de TAIC.",
  6: "Patrones de comunicación entre agentes, diseño de roles, sistemas especializados.",
  7: "Manejo de errores, optimización de costos, seguridad, observabilidad en producción.",
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
              TAIC Honduras
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => setActiveTab("modules")} className={`${activeTab === "modules" ? "text-amber-400" : "text-slate-400 hover:text-white"}`}>Curso</button>
              <button onClick={() => setActiveTab("materials")} className={`${activeTab === "materials" ? "text-amber-400" : "text-slate-400 hover:text-white"}`}>Materiales</button>
              <button onClick={() => setActiveTab("about")} className={`${activeTab === "about" ? "text-amber-400" : "text-slate-400 hover:text-white"}`}>Acerca de TAIC</button>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-slate-400 hidden sm:block">
                <span className="text-amber-400 font-semibold">{progressPercent}%</span> completo
              </div>
              <div className="w-20 md:w-32 h-1.5 md:h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          </div>
          <div className="md:hidden flex gap-4 mt-3 pb-2 overflow-x-auto">
            <button onClick={() => setActiveTab("modules")} className={`text-sm whitespace-nowrap ${activeTab === "modules" ? "text-amber-400" : "text-slate-400"}`}>Curso</button>
            <button onClick={() => setActiveTab("materials")} className={`text-sm whitespace-nowrap ${activeTab === "materials" ? "text-amber-400" : "text-slate-400"}`}>Materiales</button>
            <button onClick={() => setActiveTab("about")} className={`text-sm whitespace-nowrap ${activeTab === "about" ? "text-amber-400" : "text-slate-400"}`}>Acerca</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {activeTab === "modules" && (
          <>
            <div className="text-center mb-10 md:mb-14">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Curso de Certificación TAIC
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
                Transforma tu carrera con <span className="text-amber-400">estándares globales</span> de IA. 
                Metodología TAIC para <span className="text-amber-400">expertos locales</span>.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm text-slate-400">
                <span className="px-2 md:px-3 py-1 bg-slate-800 rounded-full border border-slate-700">7 Módulos</span>
                <span className="px-2 md:px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Ejercicios Interactivos</span>
                <span className="px-2 md:px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Certificación</span>
              </div>
            </div>

            <div className="mb-6 p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-sm md:text-base">Vista Rápida de Módulos</h3>
                <span className="text-xs text-slate-500">Click para previsualizar</span>
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
                        <span className="text-xs md:text-sm font-mono text-slate-500">MÓDULO {module.id}</span>
                        {progress.completedModules.includes(module.id) && (
                          <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30">Completado</span>
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
                        {progress.completedModules.includes(module.id) ? "Revisar Módulo" : "Iniciar Módulo"}
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
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">¿Listo para la Certificación?</h3>
              <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base">
                Completa los 7 módulos y aprueba la evaluación final para obtener tu 
                certificación TAIC. Este credencial demuestra tu capacidad de diseñar 
                y gestionar flujos de trabajo de IA en cualquier entorno técnico.
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
                    ? `Completa ${5 - progress.completedModules.length} módulo(s) más`
                    : "Iniciar Evaluación de Certificación"
                  }
                </button>
                <span className="text-xs md:text-sm text-slate-400">
                  {progress.completedModules.length}/4 módulos requeridos
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
                Guía completa de criterios de evaluación y referencia metodológica.
              </p>
              <a href="/content/taic-handbook.md" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium">
                Ver Handbook <span>→</span>
              </a>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8">
              <div className="text-4xl mb-4">📝</div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Student Workbook</h2>
              <p className="text-slate-400 mb-4 text-sm md:text-base">
                Ejercicios prácticos y plantillas para tu aprendizaje.
              </p>
              <a href="/content/student-workbook.md" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium">
                Ver Workbook <span>→</span>
              </a>
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Acerca de TAIC</h2>
            <div className="space-y-6 text-slate-300">
              <p>
                <span className="text-amber-400 font-semibold">TAIC (Technical AI Communication)</span> es una metodología 
                profesional para comunicar efectivamente con sistemas de Inteligencia Artificial.
              </p>
              <p>
                Desarrollada para profesionales técnicos que necesitan <span className="text-white">estándares globales</span>{" "}
                en el diseño y gestión de flujos de trabajo con IA.
              </p>
              <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                <h3 className="text-white font-semibold mb-2">TAIC Honduras</h3>
                <p className="text-sm text-slate-400">
                 bringing global AI standards to local experts. Nuestro objetivo es capacitar 
                  a profesionales Hondureños con las habilidades más demandadas en el mercado global de IA.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg text-center">
                  <div className="text-2xl text-amber-400 font-bold">7</div>
                  <div className="text-slate-400 text-sm">Módulos</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg text-center">
                  <div className="text-2xl text-amber-400 font-bold">10-16h</div>
                  <div className="text-slate-400 text-sm">Duración</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg text-center">
                  <div className="text-2xl text-amber-400 font-bold">70%</div>
                  <div className="text-slate-400 text-sm">Para aprobar</div>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg text-center">
                  <div className="text-2xl text-amber-400 font-bold">3</div>
                  <div className="text-slate-400 text-sm">Desafíos</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
