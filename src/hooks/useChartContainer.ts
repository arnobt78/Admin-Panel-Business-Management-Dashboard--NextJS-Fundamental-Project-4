"use client";

/**
 * Hook to detect when a chart container has valid dimensions.
 * Nivo charts need a non-zero width/height to render correctly.
 */
import { useRef, useState, useEffect } from "react";

export function useChartContainer() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setReady(width > 0 && height > 0);
      }
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return { ref, ready };
}
