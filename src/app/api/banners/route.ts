import { NextResponse } from "next/server";

interface Banner {
  title: string;
  link: string;
  imageUrl: string;
  published: boolean;
}

export async function POST(
  request: Request
): Promise<Response> {
  try {
    const {
      title,
      link,
      imageUrl,
      published,
    }: Banner = await request.json();
    const newSlider: Banner = {
      title,
      link,
      imageUrl,
      published,
    };
    console.log(newSlider);
    return NextResponse.json(newSlider);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message:
          "Failed to create Banner",
      },
      { status: 500 }
    );
  }
}
