import { Card } from "@/components/ui/card";

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Event Creation</h1>
      <Card>
        <form className="grid gap-3 sm:grid-cols-2">
          {[
            "Event name","Event category","Event description","Audience type","Audience age group","Expected footfall","Location","Social reach","Sponsorship target amount","Event dates","Website/social links","Previous sponsors"
          ].map((field) => (
            <label className="text-sm" key={field}>{field}<input className="mt-1 w-full rounded-lg border border-zinc-300 p-2 dark:border-zinc-700" /></label>
          ))}
          <label className="text-sm">Upload event images<input className="mt-1 w-full rounded-lg border border-zinc-300 p-2 dark:border-zinc-700" type="file" /></label>
          <div className="sm:col-span-2 flex gap-2"><button className="rounded bg-indigo-600 px-4 py-2 text-white" type="button">Create</button><button className="rounded border px-4 py-2" type="button">Duplicate</button><button className="rounded border px-4 py-2" type="button">Archive</button><button className="rounded border px-4 py-2" type="button">Delete</button></div>
        </form>
      </Card>
    </main>
  );
}
