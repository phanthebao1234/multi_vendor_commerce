import { NextResponse } from "next/server";

interface Slider {
    description: string;
    image: string;
    url: string;
}

export async function POST(request: Request): Promise<Response> {
    try {
        const { description, image, url }: Slider = await request.json();
        const newSlider: Slider = {
            description,
            image,
            url
        }
        console.log(newSlider);
        return NextResponse.json(newSlider);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create Slider"
            },
            {status: 500}
        )
    }
}