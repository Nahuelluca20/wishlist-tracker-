import LayoutContainer from "@/components/layout-container";

export default function page({params}: {params: {id: string}}) {
  return <LayoutContainer>{params.id}</LayoutContainer>;
}
