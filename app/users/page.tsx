"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function UsersContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const name = searchParams.get("name");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">👋 Welcome to Users Page</h1>

      {name || email ? (
        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
          {name && <p className="text-xl">Hello, {name}!</p>}
          {email && <p className="text-gray-600 mt-2">{email}</p>}
        </div>
      ) : (
        <p className="text-gray-500">No user info found — try logging in again.</p>
      )}
    </div>
  );
}

export default function UsersPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading user info...</div>}>
      <UsersContent />
    </Suspense>
  );
}
