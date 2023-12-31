import Image from "next/image";
import Link from "next/link";

import HeartsCount from "./hearts-count";

export default function ProductCard({
  id,
  title,
  hearts,
  imageUrl,
  price,
}: {
  id: string;
  title: string;
  hearts: number;
  imageUrl: string | null;
  price: string;
}) {
  return (
    <div className="col-span-2 md:col-span-1 space-y-2">
      <div className="relative aspect-square">
        {imageUrl && (
          <Image
            fill
            alt="product"
            className="rounded-xl grayscale group-hover:opacity-80"
            sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
            src={imageUrl}
          />
        )}
      </div>
      <h5 className="truncate text-sm font-medium text-white group-hover:text-vercel-cyan">
        {title}{" "}
      </h5>
      <HeartsCount hearts={hearts} />
      <div className="flex items-center justify-between gap-1">
        <div className="text-sm leading-snug flex items-center text-white">
          $ <span className="text-lg font-bold">{price}</span>
        </div>
        <Link
          className=" items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1  text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
          href={`/products/${id}`}
        >
          View
        </Link>
      </div>
    </div>
  );
}
