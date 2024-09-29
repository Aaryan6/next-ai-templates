"use client";

import { useEffect, useState } from "react";
import useSidebar from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import ProfileMenu from "./profile-menu";
import SidebarToggle from "./sidebar-toggle";

export default function SidebarBox() {
  const sidebar = useSidebar();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        if (sidebar.isOpen) {
          sidebar.toggleSidebar();
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebar]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div
      className={cn("relative z-50 hidden h-screen md:block")}
      style={{
        transition: "width 300ms ease-in-out",
        width: sidebar.isOpen ? "16rem" : "4rem",
        padding: 0,
        // transform: sidebar.isOpen ? "translateX(0)" : "translateX(-4rem)",
      }}
    >
      <SidebarToggle
        className={cn(
          "absolute top-3 z-20",
          sidebar.isOpen ? "right-2" : "right-4"
        )}
      />
      <div
        className={cn(
          "relative flex h-full w-full flex-col bg-background",
          sidebar.isOpen ? "p-4" : "p-3"
        )}
      >
        {/* Top section */}
        <div className="flex-shrink-0">
          {sidebar.isOpen && <h1 className="text-xl font-bold">LOGO</h1>}
        </div>
        {/* Middle section (chat history) */}
        <div className="mt-6 flex-grow overflow-hidden">
          {sidebar.isOpen && (
            <div className="h-full overflow-y-auto">
              <h1 className="text-sm font-medium">Chat History</h1>
            </div>
          )}
        </div>

        {/* Bottom section (user profile) */}
        <div className="mt-auto flex-shrink-0">
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}
