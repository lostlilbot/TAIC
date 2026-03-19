"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

interface ProgressData {
  completedModules: number[];
  moduleProgress: Record<number, number>;
  lastAccessedModule: number | null;
  certificateEarned: boolean;
  certificateDate: string | null;
  studentName: string | null;
}

const STORAGE_KEY = "taic-course-progress";
const INITIAL_DATA: ProgressData = {
  completedModules: [],
  moduleProgress: {},
  lastAccessedModule: null,
  certificateEarned: false,
  certificateDate: null,
  studentName: null,
};

function getInitialProgress(): ProgressData {
  if (typeof window === "undefined") return INITIAL_DATA;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return { ...INITIAL_DATA, ...JSON.parse(stored) };
    } catch {
      return INITIAL_DATA;
    }
  }
  return INITIAL_DATA;
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(getInitialProgress);
  const [isLoaded] = useState(true);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeModule = useCallback((moduleId: number) => {
    setProgress((prev) => {
      if (prev.completedModules.includes(moduleId)) return prev;
      return {
        ...prev,
        completedModules: [...prev.completedModules, moduleId],
      };
    });
  }, []);

  const updateModuleProgress = useCallback((moduleId: number, percent: number) => {
    setProgress((prev) => ({
      ...prev,
      moduleProgress: {
        ...prev.moduleProgress,
        [moduleId]: Math.max(prev.moduleProgress[moduleId] || 0, percent),
      },
      lastAccessedModule: moduleId,
    }));
  }, []);

  const setStudentName = useCallback((name: string) => {
    setProgress((prev) => ({ ...prev, studentName: name }));
  }, []);

  const earnCertificate = useCallback(() => {
    setProgress((prev) => ({
      ...prev,
      certificateEarned: true,
      certificateDate: new Date().toISOString(),
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(INITIAL_DATA);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    progress,
    isLoaded,
    completeModule,
    updateModuleProgress,
    setStudentName,
    earnCertificate,
    resetProgress,
  };
}
