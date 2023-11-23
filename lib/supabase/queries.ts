"use server";
// import {validate} from "uuid";

import db from "./db";

export async function getProducts() {
  try {
    const data = await db.query.products.findMany();

    if (data) return {data: data, error: null};
  } catch (error) {
    console.log("🔴 error:", error);

    return {data: null, error: `Error`};
  }
}
