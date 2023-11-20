"use client";

export default function AddProductButton({
  isOpen,
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) {
  return (
    <button
      className=" items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1  text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
      onClick={() => setIsOpen(!isOpen)}
    >
      Add product
    </button>
  );
}
