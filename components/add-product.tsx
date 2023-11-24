"use client";
import {clsx} from "clsx";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {useFormState} from "react-dom";
import {useFormStatus} from "react-dom";

import {addProduct} from "@/lib/queries";
const initialState = {
  message: "undefined",
};

function SubmitButton({onClose}: {onClose: (isOpen: boolean) => void}) {
  const {pending} = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className="text-white bg-vercel-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      type="submit"
      onClick={async () => (await !pending) && onClose(false)}
    >
      Add
    </button>
  );
}

export default function AddProduct({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [state, formAction] = useFormState(addProduct, initialState);

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
            <h3 className="text-xl font-semibold text-white">Static modal</h3>
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
            <form action={formAction} className=" gap-2 grid">
              <div className="grid gap-2">
                <label htmlFor="title">Title</label>
                <input required className="text-black" id="title" name="title" type="text" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="hearts">Hearts</label>
                <input required className="text-black" id="hearts" name="hearts" type="number" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="price">Price</label>
                <input required className="text-black" id="price" name="price" type="text" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="imageUrl">Image URL</label>
                <input required className="text-black" id="imageUrl" name="imageUrl" type="text" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="productLink">Product Link</label>
                <input
                  required
                  className="text-black"
                  id="productLink"
                  name="productLink"
                  type="text"
                />
              </div>
              <div className="mt-5 flex items-center py-4 md:py-5 border-t border-nextGray-200 rounded-b dark:border-gray-600">
                <SubmitButton onClose={setIsOpen} />
                <p aria-live="polite" className="sr-only" role="status">
                  {state?.message}
                </p>
                <button
                  className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  data-modal-hide="static-modal"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
