// app/api/auth/callback/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const code = formData.get("code");
  const idToken = formData.get("id_token");
  const user = formData.get("user");

  // TODO: Exchange the code for an access token from Apple’s API
  // and verify the id_token (JWT) for authenticity.

  console.log("Apple callback:", { code, idToken, user });

  // Redirect user to your app after successful auth
  return NextResponse.redirect("/dashboard");
}
