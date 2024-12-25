import { NextResponse } from "next/server";

interface Farmer {
  name: string;
  phone: number;
  code: string;
  email: string;
  physicalAddress: string;
  contactPerson: string;
  contactPersonPhone: number;
  terms: string;
  notes: string;
  isActive: boolean;
  imageUrl: string;
}

export async function POST(
  request: Request
): Promise<Response> {
  try {
    const {
      name,
      phone,
      code,
      email,
      physicalAddress,
      contactPerson,
      contactPersonPhone,
      terms,
      notes,
      isActive,
      imageUrl,
    }: Farmer = await request.json();
    const newFarmer: Farmer = {
      name,
      phone,
      code,
      email,
      physicalAddress,
      contactPerson,
      contactPersonPhone,
      terms,
      notes,
      isActive,
      imageUrl,
    };
    console.log(newFarmer);

    return NextResponse.json(newFarmer);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message:
          "Failed to create Farmer",
      },
      { status: 500 }
    );
  }
}
