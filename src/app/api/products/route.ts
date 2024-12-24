import { NextResponse } from "next/server";

interface Product {
  title: string;
  marketIds: number;
  slug: string;
  description: string;
  imageUrl: string | [];
  sku: string;
  barCode: string;
  productPrice: number;
  salePrice: number;
  categoryId: number;
  farmerId: number;
  tags: string | [];
}

export async function POST(
  request: Request
): Promise<Response> {
  try {
    const {
      title,
      marketIds,
      slug,
      description,
      imageUrl,
      sku,
      barCode,
      productPrice,
      salePrice,
      categoryId,
      farmerId,
      tags,
    }: Product = await request.json();
    const newProduct: Product = {
      title,
      marketIds,
      slug,
      description,
      imageUrl,
      sku,
      barCode,
      productPrice,
      salePrice,
      categoryId,
      farmerId,
      tags,
    };
    console.log(newProduct);

    return NextResponse.json(
      newProduct
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message:
          "Failed to create Product",
      },
      { status: 500 }
    );
  }
}
