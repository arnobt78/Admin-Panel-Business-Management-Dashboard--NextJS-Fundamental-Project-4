"use client";

/**
 * Dashboard shell: sidebar + topbar + main content area.
 * Renders the active page (children) inside the main content.
 */
import { Sidebar } from "@/scenes/global/Sidebar";
import { Topbar } from "@/scenes/global/Topbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex relative">
      <Sidebar />
      <main className="h-full w-full">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
