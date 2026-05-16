import { Card } from "@/components/ui/card";

export default function DecksPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Sponsorship Deck Generator</h1>
      <Card className="space-y-3">
        <label className="text-sm">Template<select className="mt-1 w-full rounded border border-zinc-300 p-2 dark:border-zinc-700"><option>Corporate style</option><option>Startup style</option><option>Modern minimal</option><option>Bold vibrant</option><option>Luxury style</option></select></label>
        <textarea className="min-h-40 w-full rounded border border-zinc-300 p-2 dark:border-zinc-700" placeholder="AI-generated event overview, sponsor benefits, package descriptions" />
        <div className="flex gap-2"><button className="rounded bg-indigo-600 px-4 py-2 text-white" type="button">Generate PDF</button><button className="rounded border px-4 py-2" type="button">Generate PPT</button></div>
      </Card>
    </main>
  );
}
