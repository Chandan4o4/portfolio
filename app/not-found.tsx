import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400">
          404 · Not Found
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          That page took a wrong turn.
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          The link you followed is broken or the page has moved. Head back to
          the home page — everything you need is there.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.02]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
