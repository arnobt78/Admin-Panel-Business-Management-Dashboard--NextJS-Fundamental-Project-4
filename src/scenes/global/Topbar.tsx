"use client";

/**
 * Top bar: search input and icon actions (theme toggle, notifications, settings, profile).
 */
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { ColorModeContext } from "@/lib/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export function Topbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box className="flex justify-between p-2">
      <Box className="flex bg-token-primary-400 rounded-[3px]">
        <InputBase className="ml-2 flex-1" placeholder="Search" />
        <IconButton type="button" className="p-1">
          <SearchIcon />
        </IconButton>
      </Box>
      <Box className="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
