import { Bell, Search, UserCircle2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Topbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
      <label className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900">
        <Search className="h-4 w-4 text-zinc-500" />
        <input aria-label="Search" className="w-44 bg-transparent outline-none" placeholder="Search sponsors..." />
      </label>
      <div className="flex items-center gap-2">
        <button aria-label="Notifications" className="rounded-lg border border-zinc-200 p-2 dark:border-zinc-700" type="button"><Bell className="h-4 w-4" /></button>
        <ThemeToggle />
        <button aria-label="Profile" className="rounded-lg border border-zinc-200 p-2 dark:border-zinc-700" type="button"><UserCircle2 className="h-4 w-4" /></button>
      </div>
    </header>
  );
}
