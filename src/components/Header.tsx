"use client";

/**
 * Page header: title and subtitle.
 * Reusable across all dashboard pages for consistent headings.
 */
import { Typography, Box } from "@mui/material";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <Box className="mb-[30px]">
      <Typography
        variant="h2"
        className="text-token-grey-100 font-bold mb-[5px]"
      >
        {title}
      </Typography>
      <Typography variant="h5" className="text-token-greenAccent-400">
        {subtitle}
      </Typography>
    </Box>
  );
}
