"use client";

import { useEffect } from "react";
import { useTheme } from "@mui/material";

export function ThemeSync() {
  const theme = useTheme();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme.palette.mode === "dark");
  }, [theme.palette.mode]);
  return null;
}
