import { NextResponse } from "next/server";

interface Market {
  title: string;
  slug: string;
  description: string;
  isActive: boolean;
  logoUrl: string;
}

export async function POST(
  request: Request
): Promise<Response> {
  try {
    const {
        title,
        slug,
        description,
        isActive,
        logoUrl,
    }: Market = await request.json();
    const newMarket: Market = {
        title,
        slug,
        description,
        isActive,
        logoUrl,
    };
    console.log(newMarket);

    return NextResponse.json(newMarket);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message:
          "Failed to create Market",
      },
      { status: 500 }
    );
  }
}
