import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      marketIds,
      slug,
      imageUrl,
      description,
    } = await request.json();
    const newCategory = {
      title,
      marketIds,
      slug,
      imageUrl,
      description,
    };
    console.log(newCategory);

    return NextResponse.json(
      newCategory
    );
  } catch (error) {
    console.log(error); 
    return NextResponse.json(
      {
        error,
        message:
          "Failed to create Category",
      },
      { status: 500 }
    );
  }
}
