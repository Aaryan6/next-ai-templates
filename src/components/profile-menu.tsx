"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useSidebar from "@/hooks/use-sidebar";

export default function ProfileBox() {
  const sidebar = useSidebar();

  return (
    <div className="space-y-4 mt-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-0 flex items-center gap-4">
          <Avatar className="border">
            <AvatarImage src={""} />
            <AvatarFallback className="bg-background">JD</AvatarFallback>
          </Avatar>
          {sidebar.isOpen && <h2 className="font-semibold">John Doe</h2>}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer" onClick={async () => {}}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
