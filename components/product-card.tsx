import Image from "next/image";
import {HeartIcon as HeartIconSolid} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ProductCard() {
  const hearts = 2;

  return (
    <div className="col-span-2 md:col-span-1 space-y-2">
      <div className="relative aspect-square">
        <Image
          fill
          alt="product"
          className="rounded-xl grayscale group-hover:opacity-80"
          sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
          src="https://www.partialprerendering.com/_next/image?url=%2Fpatrick-OIFgeLnjwrM-unsplash.jpg&w=3840&q=75"
        />
      </div>
      <h5 className="truncate text-sm font-medium text-white group-hover:text-vercel-cyan">
        Fusce commodo porta posuere{" "}
      </h5>
      <div className="flex space-x-1">
        {Array.from({length: 5}, (_, index) =>
          index < hearts ? (
            <HeartIconSolid key={index} className="w-3.5 h-3.5 text-white" />
          ) : (
            <HeartIconSolid key={index + hearts} className="w-3.5 h-3.5 text-nextGray-400" />
          ),
        )}
      </div>
      <div className="flex items-center justify-between gap-1">
        <div className="text-sm leading-snug flex items-center text-white">
          $ <span className="text-lg font-bold">46</span>
        </div>
        <Link
          className=" items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1  text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
          href={"/"}
        >
          View
        </Link>
      </div>
    </div>
  );
}
