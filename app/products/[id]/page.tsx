import Image from "next/image";
import {HeartIcon as HeartIconSolid} from "@heroicons/react/24/solid";
import Link from "next/link";

import LayoutContainer from "@/components/layout-container";
import {getProductsById} from "@/lib/supabase/queries";

export default async function page({params}: {params: {id: string}}) {
  const product = await getProductsById(params.id);

  // : {data: Product} | {data: null; error: string} | undefined
  if (!product?.data) {
    return <div>Product not found</div>;
  }

  const {hearts, imageUrl, title, price, productLink} = product?.data;

  return (
    <LayoutContainer>
      <div className="sm:flex gap-5 justify-center">
        {imageUrl && (
          <Image
            alt="product"
            className="rounded-xl grayscale group-hover:opacity-80"
            height={300}
            src={imageUrl ?? ""}
            width={300}
          />
        )}
        <div className="max-w-[300px] space-y-2">
          <h5 className="truncate text-sm font-medium text-white group-hover:text-vercel-cyan">
            {title}{" "}
          </h5>
          <div className="flex space-x-1">
            {hearts &&
              Array.from({length: 5}, (_, index) =>
                index < hearts ? (
                  <HeartIconSolid key={index} className="w-3.5 h-3.5 text-white" />
                ) : (
                  <HeartIconSolid key={index + hearts} className="w-3.5 h-3.5 text-nextGray-400" />
                ),
              )}
          </div>
          <div className="grid space-y-5 items-center w-full justify-between gap-3">
            <div className="text-sm leading-snug flex items-center text-white">
              $ <span className="text-lg font-bold">{price}</span>
            </div>
            <Link
              className=" items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1  text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
              href={productLink ?? ""}
              target="_blank"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}
