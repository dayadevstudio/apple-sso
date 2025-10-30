"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

function UsersContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {name ?? "User"} 👋</h1>
      {email && <p className="text-gray-600">Your email: {email}</p>}
    </div>
  );
}

export default function UsersPage() {
  return (
    <Suspense fallback={<p>Loading user info...</p>}>
      <UsersContent />
    </Suspense>
  );
}
