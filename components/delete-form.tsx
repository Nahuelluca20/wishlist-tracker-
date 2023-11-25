"use client";

import {useFormState, useFormStatus} from "react-dom";

import {deleteProduct} from "@/lib/queries";

const initialState = {
  message: "null",
};

function DeleteButton() {
  const {pending} = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className="items-center space-x-2 rounded-lg bg-red-600 px-3 py-1  text-sm font-medium text-white hover:bg-red-600/90 disabled:text-white/70"
      type="submit"
    >
      Delete
    </button>
  );
}

export function DeleteForm({id}: {id: number | string}) {
  const [state, formAction] = useFormState(deleteProduct, initialState);

  return (
    <form action={formAction}>
      <input name="id" type="hidden" value={id} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
