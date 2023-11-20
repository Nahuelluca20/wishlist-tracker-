import Image from "next/image";

export default function SearchBar() {
  return (
    <nav className="w-full flex rounded-lg bg-nextGray-300 px-5 py-4 items-center">
      <div>
        <Image
          alt="logo"
          className="bg-white rounded-full border w-10 h-10"
          height={40}
          src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
          width={40}
        />
      </div>
    </nav>
  );
}
