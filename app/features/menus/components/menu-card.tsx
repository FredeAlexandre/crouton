import { Ellipsis, Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";

import { format } from "date-fns"

function MenuCardHeader({ children }: {children?: React.ReactNode}) {
    return (
        <div className="w-full bg-background border rounded-md flex justify-between items-center font-semibold p-1 pl-3">
            {children}
            <div className="flex items-center gap-1">
                <Button size="icon" variant="ghost">
                    <Plus />
                </Button>
                <Button disabled size="icon" variant="ghost">
                    <Ellipsis />
                </Button>
            </div>
        </div>
    )
}

function MenuCardDay({ date }: { date: Date }) {
    return (
        <div>
            <p>{format(date, 'EEEE').toLowerCase()} <span className="text-muted-foreground">{format(date, 'd LLL')}.</span></p>
        </div>
    )
}

function MenuCardContentEmpty() {
    return (
        <div className="w-full h-10 flex items-center text-muted-foreground p-3">
            <p>No recipes yet</p>
        </div>
    )
}

function MenuCardContentContent() {
    return (
        <div className="w-full space-y-2 p-3">
            <div className="flex items-center gap-2">
                <Skeleton className="w-10 h-10" />
                <Skeleton className="w-20 h-4 rounded-md" />
            </div>
            <div className="flex items-center gap-2">
                <Skeleton className="w-10 h-10" />
                <Skeleton className="w-30 h-4 rounded-md" />
            </div>
            <div className="flex items-center gap-2">
                <Skeleton className="w-10 h-10" />
                <Skeleton className="w-18 h-4 rounded-md" />
            </div>
            <div className="flex items-center gap-2">
                <Skeleton className="w-10 h-10" />
                <Skeleton className="w-11 h-4 rounded-md" />
            </div>
            <div className="flex items-center gap-2">
                <Skeleton className="w-10 h-10" />
                <Skeleton className="w-24 h-4 rounded-md" />
            </div>
        </div>
    )
}

function MenuCard({ children }: { children?: React.ReactNode }) {
    return (
        <div className="w-full bg-muted rounded-lg p-1">
            {children}
        </div>
    )
}

export { MenuCard, MenuCardHeader, MenuCardDay, MenuCardContentEmpty, MenuCardContentContent }