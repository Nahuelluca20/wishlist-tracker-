"use server";

import {z} from "zod";
import {revalidatePath, revalidateTag} from "next/cache";
import {redirect} from "next/navigation";

import {prisma} from "@/lib/prisma";

// Get products queries

export async function getProducts() {
  try {
    const data = await prisma.products.findMany();

    if (data) return {data: data, error: null};
  } catch (error) {
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
    return {data: null, error: `Error`};
  }
}

// Form queries

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

export async function deleteProduct(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
  });

  try {
    await prisma.products.delete({
      where: {
        id: data.id,
      },
    });

    revalidateTag("/products");
  } catch (e) {
    return {message: "Failed to delete product"};
  }
  redirect("/");
}
