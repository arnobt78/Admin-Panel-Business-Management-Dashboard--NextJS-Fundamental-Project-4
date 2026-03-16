"use client";

/**
 * Line chart page: full-size line chart.
 */
import { Box } from "@mui/material";
import Header from "@/components/Header";
import LineChart from "@/components/LineChart";
import { useRef, useState, useEffect, useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";

export default function Line() {
  const { isCollapsed } = useContext(SidebarContext);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [containerReady, setContainerReady] = useState(false);
  const [sidebarTransitioning, setSidebarTransitioning] = useState(false);

  useEffect(() => {
    const sidebar = document.querySelector(".app-sidebar");
    let transitionTimeout: ReturnType<typeof setTimeout>;

    function checkSize() {
      if (chartContainerRef.current) {
        const { width, height } =
          chartContainerRef.current.getBoundingClientRect();
        setContainerReady(width > 0 && height > 0);
      }
    }

    function handleTransitionStart() {
      setSidebarTransitioning(true);
    }
    function handleTransitionEnd() {
      setSidebarTransitioning(false);
      transitionTimeout = setTimeout(checkSize, 50);
    }

    if (sidebar) {
      sidebar.addEventListener("transitionstart", handleTransitionStart);
      sidebar.addEventListener("transitionend", handleTransitionEnd);
    }
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => {
      if (sidebar) {
        sidebar.removeEventListener("transitionstart", handleTransitionStart);
        sidebar.removeEventListener("transitionend", handleTransitionEnd);
      }
      window.removeEventListener("resize", checkSize);
      if (transitionTimeout) clearTimeout(transitionTimeout);
    };
  }, [isCollapsed]);

  return (
    <Box className="m-5">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box ref={chartContainerRef} className="h-[75vh]">
        {containerReady && !sidebarTransitioning && (
          <LineChart key={isCollapsed ? "collapsed" : "expanded"} />
        )}
      </Box>
    </Box>
  );
}
