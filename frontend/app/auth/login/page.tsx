export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center p-4">
      <form className="w-full space-y-3 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <h1 className="text-xl font-semibold">Login</h1>
        <input className="w-full rounded border border-zinc-300 p-2 dark:border-zinc-700" placeholder="Email" type="email" />
        <input className="w-full rounded border border-zinc-300 p-2 dark:border-zinc-700" placeholder="Password" type="password" />
        <button className="w-full rounded bg-indigo-600 py-2 text-white" type="button">Login</button>
        <button className="w-full rounded border py-2" type="button">Continue with Google</button>
      </form>
    </main>
  );
}
