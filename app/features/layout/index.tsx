import { Outlet } from "@tanstack/react-router";

import { BottomMenu } from "./components/bottom-menu";

function Layout() {
  return (
    <div className="flex justify-center h-dvh">
      <div className="w-full sm:w-auto sm:aspect-9/16 min-h-240 max-h-dvh border-x relative">
        <Outlet />
        <BottomMenu />
      </div>
    </div>
  );
}

export default Layout;
