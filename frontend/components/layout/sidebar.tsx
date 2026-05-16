"use client";

import Link from "next/link";
import { BarChart3, Bell, BriefcaseBusiness, LayoutDashboard, Mail, Presentation, Settings, Users } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/events", label: "Events", icon: BriefcaseBusiness },
  { href: "/sponsors", label: "Sponsors", icon: Users },
  { href: "/outreach", label: "Outreach", icon: Mail },
  { href: "/decks", label: "Decks", icon: Presentation },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-full border-b border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 lg:h-screen lg:w-64 lg:border-b-0 lg:border-r">
      <div className="mb-6 text-lg font-semibold">Collabrix</div>
      <nav className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              href={item.href}
              key={item.href}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
