'use client';

import { useEffect, useState, useCallback } from 'react';

interface DemoOverrides {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  serviceArea?: string;
}

/**
 * Listens for postMessage customization commands from the Template Portal.
 * Applies color overrides as CSS custom properties on :root.
 * Returns the current overrides for React components to consume.
 */
export function useDemoListener() {
  const [overrides, setOverrides] = useState<Partial<DemoOverrides>>({});
  const [isActive, setIsActive] = useState(false);

  const applyColors = useCallback((colors: Partial<DemoOverrides>) => {
    const root = document.documentElement;
    if (colors.primaryColor) {
      root.style.setProperty('--color-primary', colors.primaryColor);
      root.style.setProperty('--primary', colors.primaryColor);
    }
    if (colors.secondaryColor) {
      root.style.setProperty('--color-secondary', colors.secondaryColor);
      root.style.setProperty('--secondary', colors.secondaryColor);
    }
    if (colors.accentColor) {
      root.style.setProperty('--color-accent', colors.accentColor);
      root.style.setProperty('--accent', colors.accentColor);
    }
  }, []);

  const resetColors = useCallback(() => {
    const root = document.documentElement;
    root.style.removeProperty('--color-primary');
    root.style.removeProperty('--primary');
    root.style.removeProperty('--color-secondary');
    root.style.removeProperty('--secondary');
    root.style.removeProperty('--color-accent');
    root.style.removeProperty('--accent');
  }, []);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const data = event.data;
      if (!data?.type) return;

      if (data.type === 'DEMO_CUSTOMIZE' && data.payload) {
        setIsActive(true);
        setOverrides(data.payload);
        applyColors(data.payload);
        window.parent.postMessage({ type: 'DEMO_ACK' }, '*');
      }

      if (data.type === 'DEMO_RESET') {
        setIsActive(false);
        setOverrides({});
        resetColors();
        window.parent.postMessage({ type: 'DEMO_ACK' }, '*');
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [applyColors, resetColors]);

  return { overrides, isActive };
}
