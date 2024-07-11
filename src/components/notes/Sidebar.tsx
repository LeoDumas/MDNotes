import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "../ui/themeToggle";
import { Button } from "../ui/button";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className=" flex flex-col justify-between min-h-full px-3 py-2 border-r">
      <div>
        <Button>Add note</Button>
      </div>
      <div className=" flex items-center gap-x-3">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
