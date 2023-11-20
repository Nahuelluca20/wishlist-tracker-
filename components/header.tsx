import Image from "next/image";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <nav className="w-full flex rounded-lg bg-nextGray-300 px-5 py-4 items-center">
      <div className="flex items-center gap-4">
        <Image
          alt="logo"
          className="bg-white rounded-full border w-10 h-10"
          height={40}
          src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
          width={40}
        />
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-300" />
          </div>
          <input
            aria-label="Search"
            autoComplete="off"
            className="h-10 block w-full rounded-full border-none bg-gray-600 pl-10 font-medium text-gray-200 focus:border-vercel-pink focus:ring-2 focus:ring-vercel-pink"
            id="search"
            name="search"
            type="search"
          />
        </div>
      </div>
    </nav>
  );
}
