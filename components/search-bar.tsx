import Image from "next/image";

export default function SearchBar() {
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
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                fill-rule="evenodd"
              />
            </svg>
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
