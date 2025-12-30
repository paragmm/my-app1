import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://dummyjson.com/products", {
        cache: "no-store"
    });

    const json = await res.json();

    return NextResponse.json(json.products);
}
