"use client";

import Image from "next/image";

export default function Profile() {
  // Demo user data
  const demoUser = {
    name: "John Doe",
    email: "john@example.com",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=John",
  };

  return (
    <div className="mx-auto mt-4 max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        {demoUser.image ? (
          <Image
            src={demoUser.image}
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
            <span className="text-gray-600">?</span>
          </div>
        )}
        <div>
          <p className="font-medium">{demoUser.name}</p>
          <p className="text-sm text-gray-500">{demoUser.email}</p>
        </div>
      </div>
    </div>
  );
}
