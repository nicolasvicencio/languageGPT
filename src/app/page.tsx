import Link from "next/link";

export default function Home() {
  return (
    <main className="pattern-background flex justify-center items-center w-full min-h-screen">
      <Link
        href="/createchat"
        className="rounded-xl p-2 bg-stone-900 opacity-40 font-semibold hover:bg-stone-700"
      >
        <h3>Create new chat to start to practice</h3>
      </Link>
    </main>
  );
}
