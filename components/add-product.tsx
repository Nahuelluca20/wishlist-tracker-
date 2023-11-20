"use client";
import {clsx} from "clsx";
import {XMarkIcon} from "@heroicons/react/24/solid";

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
        "overflow-hidden z-50 flex fixed  bg-[hsl(0,0%,0%,0.8)] justify-center mx-auto items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
        {
          block: isOpen,
          hidden: !isOpen,
        },
      )}
      data-modal-backdrop="static"
      id="static-modal"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-black border-nextGray-200 border-2 rounded-lg shadow dark:bg-gray-700">
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
            <p className="text-base leading-relaxed text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy
              laws for its citizens, companies around the world are updating their terms of service
              agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
              May 25 and is meant to ensure a common set of data rights in the European Union. It
              requires organizations to notify users as soon as possible of high-risk data breaches
              that could personally affect them.
            </p>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-nextGray-200 rounded-b dark:border-gray-600">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              data-modal-hide="static-modal"
              type="button"
            >
              I accept
            </button>
            <button
              className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              data-modal-hide="static-modal"
              type="button"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
