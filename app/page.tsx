import Header from "@/components/header";
import LatestProducts from "@/components/latest-products";
import LayoutContainer from "@/components/layout-container";

export default async function Home() {
  return (
    <LayoutContainer>
      <Header />
      <div className="mt-10">
        <LatestProducts />
      </div>
    </LayoutContainer>
  );
}
