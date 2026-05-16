export default function ForgotPasswordPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center p-4">
      <form className="w-full space-y-3 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <h1 className="text-xl font-semibold">Forgot Password</h1>
        <input className="w-full rounded border border-zinc-300 p-2 dark:border-zinc-700" placeholder="Email" type="email" />
        <button className="w-full rounded bg-indigo-600 py-2 text-white" type="button">Send reset link</button>
      </form>
    </main>
  );
}
