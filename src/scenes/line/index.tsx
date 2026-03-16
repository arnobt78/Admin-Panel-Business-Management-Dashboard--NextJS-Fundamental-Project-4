"use client";

/**
 * Line chart page: full-size line chart.
 */
import { Box } from "@mui/material";
import Header from "@/components/Header";
import LineChart from "@/components/LineChart";
import { useRef, useState, useEffect } from "react";

export default function Line() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [containerReady, setContainerReady] = useState(false);

  useEffect(() => {
    function checkSize() {
      if (chartContainerRef.current) {
        const { width, height } =
          chartContainerRef.current.getBoundingClientRect();
        setContainerReady(width > 0 && height > 0);
      }
    }
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <Box className="m-5">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box ref={chartContainerRef} className="h-[75vh]">
        {containerReady && <LineChart />}
      </Box>
    </Box>
  );
}
