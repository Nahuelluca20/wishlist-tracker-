import Header from "@/components/header";
import LatestProducts from "@/components/latest-products";
import LayoutContainer from "@/components/layout-container";
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
          <ResultsProducts name={searchParams.name as string} />
        ) : (
          <LatestProducts />
        )}
      </div>
    </LayoutContainer>
  );
}
