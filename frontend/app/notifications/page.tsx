export default function NotificationsPage() {
  const items = ["New sponsor reply from Acme", "Follow-up reminder for FinFlow", "Campaign reached 25% response", "Meeting tomorrow with EduSpark"];

  return (
    <main className="mx-auto max-w-3xl space-y-3 p-4">
      <h1 className="text-2xl font-semibold">Notification Center</h1>
      <ul className="space-y-2">
        {items.map((item) => <li className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700" key={item}>{item}</li>)}
      </ul>
    </main>
  );
}
