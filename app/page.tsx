import {Suspense} from "react";

import Header from "@/components/header";
import LatestProducts from "@/components/latest-products";
import LayoutContainer from "@/components/layout-container";
import {ProductsSkeleton} from "@/components/products-skeleton";
import ResultsProducts from "@/components/results-products";

export default async function Home({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  return (
    <LayoutContainer>
      <Header />
      <div className="mt-10">
        {searchParams.name !== undefined && searchParams.name !== "" ? (
          <Suspense fallback={<ProductsSkeleton />}>
            <ResultsProducts name={searchParams.name as string} />
          </Suspense>
        ) : (
          <Suspense fallback={<ProductsSkeleton />}>
            <LatestProducts />
          </Suspense>
        )}
      </div>
    </LayoutContainer>
  );
}
