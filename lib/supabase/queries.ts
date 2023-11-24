"use server";

import {prisma} from "@/lib/prisma";

// import {validate} from "uuid";

export async function getProducts() {
  try {
    const data = await prisma.products.findMany();

    if (data) return {data: data, error: null};
  } catch (error) {
    console.log("🔴 error:", error);

    return {data: null, error: `Error`};
  }
}

export async function getProductsById(productId: string) {
  try {
    const data = await prisma.products.findById(productId);

    if (data) return {data: data, error: null};
  } catch (error) {
    console.log("🔴 error:", error);

    return {data: null, error: `Error`};
  }
}
