"use client";

/**
 * Stat card: icon, title, subtitle, progress ring, and increase label.
 * Used on the dashboard for KPIs (emails, sales, clients, traffic).
 */
import { Box, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  progress: string;
  increase: string;
}

export default function StatBox({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBoxProps) {
  return (
    <Box className="w-full mx-[30px]">
      <Box className="flex justify-between">
        <Box>
          {icon}
          <Typography variant="h4" className="font-bold text-token-grey-100">
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box className="flex justify-between mt-0.5">
        <Typography variant="h5" className="text-token-greenAccent-500">
          {subtitle}
        </Typography>
        <Typography variant="h5" className="italic text-token-greenAccent-600">
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}
