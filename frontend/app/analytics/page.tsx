import Link from "next/link";

export default function AnalyticsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-3 p-4">
      <h1 className="text-2xl font-semibold">Analytics</h1>
      <p className="text-zinc-600 dark:text-zinc-300">Interactive charts and KPI summaries are available on the <Link className="text-indigo-600" href="/dashboard">dashboard</Link>.</p>
    </main>
  );
}
