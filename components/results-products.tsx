import {getProductsByName} from "@/lib/queries";

import ProductCard from "./product-card";

export default async function ResultsProducts({name}: {name: string}) {
  const products = await getProductsByName(name);

  if (!products) return;

  return (
    <div>
      <h2 className="text-lg font-medium text-white">Results</h2>
      <span className="text-sm font-medium text-gray-400">Your search results</span>
      <div className="mt-5 grid grid-cols-4 gap-6">
        {products.data &&
          products.data.map((product) => (
            <ProductCard
              key={product.id}
              hearts={product.hearts ?? 0}
              id={product.id}
              imageUrl={product.image_url}
              price={product.price ?? "0"}
              title={product.title}
            />
          ))}
      </div>
    </div>
  );
}
