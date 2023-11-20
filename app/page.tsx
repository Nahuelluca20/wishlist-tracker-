import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-24">
      <section className="p-6 text-white rounded-lg border-[1.8px] shadow-2xl border-nextGray-200 bg-black max-w-[820px] w-full">
        <SearchBar />
        <h1 className="mt-10">WishList Tracker</h1>
      </section>
    </main>
  );
}
