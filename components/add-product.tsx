"use client";
import {clsx} from "clsx";
import {XMarkIcon} from "@heroicons/react/24/solid";

import AddProductForm from "./add-product-form";

export default function AddProduct({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "overflow-hidden z-50 top-0 left-0 flex fixed bg-[hsl(0,0%,0%,0.8)] justify-center items-center w-full h-screen max-h-full",
        {
          block: isOpen,
          hidden: !isOpen,
        },
      )}
      data-modal-backdrop="static"
      id="static-modal"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-nextGray-500 border-nextGray-200 border-2 rounded-lg shadow dark:bg-gray-700">
          <div
            className="flex items-center justify-between p-4 md:p-5 border-b
          border-nextGray-200 rounded-t nextGray-200"
          >
            <h3 className="text-xl font-semibold text-white">Add Product</h3>
            <button
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="w-6 h-6" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <AddProductForm setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
