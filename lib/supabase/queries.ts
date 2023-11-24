"use server";

import {eq} from "drizzle-orm";

import db from "./db";
import {Product} from "./supabase.types";

// import {validate} from "uuid";

export async function getProducts() {
  try {
    const data = await db.query.products.findMany();

    if (data) return {data: data, error: null};
  } catch (error) {
    console.log("🔴 error:", error);

    return {data: null, error: `Error`};
  }
}

export async function getProductsById(productId: string) {
  try {
    const data = await db.query.products.findFirst({
      where: (s, {eq}) => eq(s.id, productId),
    });

    if (data) return {data: data, error: null};
  } catch (error) {
    console.log("🔴 error:", error);

    return {data: null, error: `Error`};
  }
}
