export default function SettingsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="grid gap-3">
        {[
          "Profile settings",
          "Organization settings",
          "Notification preferences",
          "Email integrations",
          "Theme settings",
          "Billing settings",
        ].map((setting) => (
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700" key={setting}>{setting}</div>
        ))}
      </div>
    </main>
  );
}
