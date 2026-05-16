import { Card } from "@/components/ui/card";

export default function OutreachPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">AI Email Generation</h1>
      <Card className="space-y-3">
        <label className="text-sm">Tone<select className="mt-1 w-full rounded border border-zinc-300 p-2 dark:border-zinc-700"><option>Formal</option><option>Startup</option><option>Casual</option><option>Premium</option><option>Aggressive sales</option></select></label>
        <input className="w-full rounded border border-zinc-300 p-2 dark:border-zinc-700" placeholder="Subject line" />
        <textarea className="min-h-52 w-full rounded border border-zinc-300 p-2 dark:border-zinc-700" placeholder="Generated outreach content" />
        <div className="flex flex-wrap gap-2"><button className="rounded bg-indigo-600 px-4 py-2 text-white" type="button">Regenerate</button><button className="rounded border px-4 py-2" type="button">Copy</button><button className="rounded border px-4 py-2" type="button">Send Email</button><button className="rounded border px-4 py-2" type="button">Save Template</button></div>
      </Card>
    </main>
  );
}
