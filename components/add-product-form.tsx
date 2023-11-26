"use client";
import {useFormState} from "react-dom";
import {useFormStatus} from "react-dom";
import {useState} from "react";

import {addProduct} from "@/lib/queries";

import HeartsCount from "./hearts-count";
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

export default function AddProductForm({setIsOpen}: {setIsOpen: (isOpen: boolean) => void}) {
  const [state, formAction] = useFormState(addProduct, initialState);
  const [hearts, setHearts] = useState<number>(0);

  const handleHeartClick = (index: number) => {
    setHearts(index + 1);
  };

  const inputs = [
    {
      id: "title",
      name: "title",
      type: "text",
      label: "Title",
    },
    {
      id: "price",
      name: "price",
      type: "text",
      label: "Price",
    },
    {
      id: "imageUrl",
      name: "imageUrl",
      type: "text",
      label: "Image URL",
    },
    {
      id: "productLink",
      name: "productLink",
      type: "text",
      label: "Product Link",
    },
  ];

  return (
    <form action={formAction} className=" gap-2 grid">
      {inputs.map((input) => (
        <div key={input.id} className="grid gap-2">
          <label htmlFor="title">{input.label}</label>
          <input
            required
            className="border-none font-medium rounded-md bg-gray-600 py-2 px-4 border border-gray-300 text-gray-200"
            id={input.id}
            name={input.name}
            type={input.type}
          />
        </div>
      ))}
      <input name="hearts" type="hidden" value={hearts} />
      <div className="mt-1">
        <label htmlFor="hearts">How much do you like this product</label>
        <div className="flex space-x-1">
          <HeartsCount handleClick={handleHeartClick} hearts={hearts} size="6" />
        </div>
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
  );
}
