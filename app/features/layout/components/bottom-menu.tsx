import { Link } from "@tanstack/react-router";

import { Button } from "~/components/ui/button";

import { CalendarDays, ChefHat, Settings, ShoppingBasket, Sparkles } from "lucide-react";
import { cn } from "~/lib/utils";

export function BottomMenu() {
  return (
    <div className="absolute bottom-0 border-t w-full flex justify-center items-center bg-background h-18 grid grid-cols-5">
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/menus" className="block flex flex-col items-center gap-1">
          {({ isActive }) => <CalendarDays className={cn("size-6 text-muted-foreground", isActive && "text-primary")} />}
        </Link>
      </Button>
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/" className="block flex flex-col items-center gap-1">
          {({ isActive }) => <ChefHat className={cn("size-6 text-muted-foreground", isActive && "text-primary")} />}
        </Link>
      </Button>
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/grocery-list" className="block flex flex-col items-center gap-1">
          {({ isActive }) => <ShoppingBasket className={cn("size-6 text-muted-foreground", isActive && "text-primary")} />}
        </Link>
      </Button>
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/explore" className="block flex flex-col items-center gap-1">
          {({ isActive }) => <Sparkles className={cn("size-6 text-muted-foreground", isActive && "text-primary")} />}
        </Link>
      </Button>
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/settings" className="block flex flex-col items-center gap-1">
          {({ isActive }) => <Settings className={cn("size-6 text-muted-foreground", isActive && "text-primary")} />}
        </Link>
      </Button>
    </div>
  );
}
