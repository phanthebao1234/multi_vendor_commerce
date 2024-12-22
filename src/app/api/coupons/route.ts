import { NextResponse } from "next/server";

interface Coupon {
  title: string;
  couponCode: string;
  expiryDate: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { title, couponCode, expiryDate }: Coupon = await request.json();
    const newCoupon: Coupon = {
      title,
      couponCode,
      expiryDate,
    };
    console.log(newCoupon);

    return NextResponse.json(newCoupon);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create Coupon",
      },
      { status: 500 }
    );
  }
}
