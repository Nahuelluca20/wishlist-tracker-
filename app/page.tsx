import Header from "@/components/header";
import LatestProducts from "@/components/latest-products";
import ProductCard from "@/components/product-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-4 md:px-24">
      <section className="p-6 text-white rounded-lg border-[1.8px] shadow-2xl border-nextGray-200 bg-black max-w-[820px] w-full">
        <Header />
        <div className="mt-10">
          <LatestProducts />
        </div>
        <div className="mt-10 grid grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
