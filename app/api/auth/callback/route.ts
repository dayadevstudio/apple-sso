import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const id_token = formData.get("id_token");
    const user = formData.get("user");

    // Optional: parse Apple user info (Apple sends JSON once)
    let parsedUser = null;
    try {
      parsedUser = user ? JSON.parse(user as string) : null;
    } catch (e) {
      console.error("Failed to parse Apple user JSON", e);
    }

    // TODO: Store user info in DB or session here if needed

    // Redirect to /users with user info as query params (optional)
    const redirectUrl = new URL("/users", req.url);
    if (parsedUser?.email) redirectUrl.searchParams.set("email", parsedUser.email);
    if (parsedUser?.name?.firstName)
      redirectUrl.searchParams.set("name", `${parsedUser.name.firstName} ${parsedUser.name.lastName || ""}`);

    return NextResponse.redirect(redirectUrl.toString());
  } catch (err) {
    console.error("Apple callback error:", err);
    return NextResponse.json({ error: "Callback failed" }, { status: 500 });
  }
}
