import ProductCard from "./product-card";

export default function LatestProducts() {
  return (
    <div>
      <h2 className="text-lg font-medium text-white">Latest products added</h2>
      <span className="text-sm font-medium text-gray-400">
        These are the last products you added to Wishlist Tracker
      </span>
      <div className="mt-5 grid grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
