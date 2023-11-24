"use server";

import {z} from "zod";
import {revalidatePath} from "next/cache";

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
    const data = await prisma.products.findUnique({
      where: {
        id: productId,
      },
    });

    if (data) return {data: data, error: null};
  } catch (error) {
    console.log("🔴 error:", error);

    return {data: null, error: `Error`};
  }
}

export async function addProduct(prevState: any, formData: FormData) {
  const schema = z.object({
    title: z.string().min(1),
    hearts: z.number().min(0).max(5),
    price: z.string(),
    imageUrl: z.string().url(),
    productLink: z.string().url(),
  });

  const parse = schema.safeParse({
    title: formData.get("title"),
    hearts: Number(formData.get("hearts")),
    price: formData.get("price"),
    imageUrl: formData.get("imageUrl"),
    productLink: formData.get("productLink"),
  });

  console.log(parse);
  if (!parse.success) {
    return {message: "Failed to create product"};
  }

  const productData = parse.data;

  try {
    await prisma.products.create({
      data: {
        title: productData.title,
        hearts: productData.hearts,
        price: productData.price,
        image_url: productData.imageUrl,
        product_link: productData.productLink,
      },
    });

    revalidatePath("/");

    return {message: `Added todo ${productData.title}`};
  } catch (e) {
    return {message: "Failed to create todo"};
  }
}
