import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    console.log("🍎 Apple callback payload:", data);

    // TODO: exchange code for tokens here if needed

    return NextResponse.json({ received: true, data });
  } catch (err) {
    console.error("Callback error:", err);
    return NextResponse.json({ error: "Callback handling failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "GET not supported — use POST" });
}
