import { Link } from "@tanstack/react-router";

import { Button } from "~/components/ui/button";

import { HomeIcon } from "lucide-react";

export function BottomMenu() {
  return (
    <div className="absolute bottom-0 border-t w-full flex justify-center items-center bg-background h-20 grid grid-cols-5">
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/" className="block flex flex-col items-center gap-1">
          <HomeIcon className="size-6" />
          <span className="text-xs">Menus</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/" className="block flex flex-col items-center gap-1">
          <HomeIcon className="size-6" />
          <span className="text-xs">Recettes</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/" className="block flex flex-col items-center gap-1">
          <HomeIcon className="size-6" />
          <span className="text-xs">Liste de courses</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/" className="block flex flex-col items-center gap-1">
          <HomeIcon className="size-6" />
          <span className="text-xs">Decouvrez</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" className="w-full h-full rounded-none">
        <Link to="/" className="block flex flex-col items-center gap-1">
          <HomeIcon className="size-6" />
          <span className="text-xs">Parametres</span>
        </Link>
      </Button>
    </div>
  );
}
