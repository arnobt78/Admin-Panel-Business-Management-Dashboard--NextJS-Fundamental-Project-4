"use client";

/**
 * Collapsible sidebar navigation with menu items.
 * Uses react-pro-sidebar v1; collapse state comes from SidebarContext.
 */
import { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Sidebar as ProSidebarComponent,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { SidebarContext } from "@/context/SidebarContext";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
}

function Item({ title, to, icon, selected }: ItemProps) {
  const router = useRouter();
  return (
    <MenuItem
      active={selected === title}
      onClick={() => router.push(to)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
}

const pathToTitle: Record<string, string> = {
  "/": "Dashboard",
  "/team": "Manage Team",
  "/contacts": "Contacts Information",
  "/invoices": "Invoices Balances",
  "/form": "Profile Form",
  "/calendar": "Calendar",
  "/faq": "FAQ Page",
  "/bar": "Bar Chart",
  "/pie": "Pie Chart",
  "/line": "Line Chart",
  "/geography": "Geography Chart",
};

export function Sidebar() {
  const { isCollapsed, setIsCollapsed } = useContext(SidebarContext);
  const pathname = usePathname();
  const selected = pathToTitle[pathname] ?? "Dashboard";

  useEffect(() => {
    const t = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
    return () => clearTimeout(t);
  }, [isCollapsed]);

  return (
    <ProSidebarComponent
      collapsed={isCollapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          background: "var(--token-primary-400) !important",
        },
        [`.${menuClasses.icon}`]: {
          backgroundColor: "transparent !important",
        },
        [`.${menuClasses.button}`]: {
          padding: "5px 35px 5px 20px !important",
          color: "var(--token-grey-100)",
        },
        [`.${menuClasses.button}:hover`]: {
          color: "#868dfb !important",
        },
        [`.${menuClasses.active}`]: {
          color: "#6870fa !important",
        },
      }}
    >
      <Menu>
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          rootStyles={{ marginTop: "10px", marginBottom: "20px" }}
        >
          {!isCollapsed && (
            <Box className="flex justify-between items-center ml-4">
              <Typography variant="h3" className="text-token-grey-100">
                ADMIN PANEL
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {!isCollapsed && (
          <Box className="mb-6">
            <Box className="flex justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="profile-user"
                width={100}
                height={100}
                src="/assets/user.png"
                className="cursor-pointer rounded-full"
              />
            </Box>
            <Box className="text-center">
              <Typography variant="h2" className="text-token-grey-100 font-bold mt-2.5">
                John Doe
              </Typography>
              <Typography variant="h5" className="text-token-greenAccent-500">
                VIP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}

        <Box className={isCollapsed ? undefined : "pl-[10%]"}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
          />
          <Typography variant="h6" className="text-token-grey-300 my-[15px] mt-0 mb-1 ml-5">
            Data
          </Typography>
          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
          />
          <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
          />
          <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
          />
          <Typography variant="h6" className="text-token-grey-300 my-[15px] mt-0 mb-1 ml-5">
            Pages
          </Typography>
          <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
          />
          <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
          />
          <Typography variant="h6" className="text-token-grey-300 my-[15px] mt-0 mb-1 ml-5">
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
          />
          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
          />
          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
          />
          <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
          />
        </Box>
      </Menu>
    </ProSidebarComponent>
  );
}
