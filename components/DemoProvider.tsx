'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useDemoListener } from '../hooks/use-demo-listener';

interface DemoContextValue {
  overrides: Record<string, string>;
  isActive: boolean;
  /** Get a field value — returns override if set, else the original */
  get: (original: string, field: string) => string;
}

const DemoContext = createContext<DemoContextValue>({
  overrides: {},
  isActive: false,
  get: (original) => original,
});

export function useDemo() {
  return useContext(DemoContext);
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const { overrides, isActive } = useDemoListener();

  const get = (original: string, field: string): string => {
    const val = (overrides as Record<string, string | undefined>)[field];
    return val && val.trim() !== '' ? val : original;
  };

  return (
    <DemoContext.Provider value={{ overrides: overrides as Record<string, string>, isActive, get }}>
      {children}
    </DemoContext.Provider>
  );
}
