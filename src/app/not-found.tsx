import { IconFileUnknown } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="mx-auto mt-4 max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <p className="flex items-center justify-center gap-2 text-2xl">
        <IconFileUnknown />
        This page cannot be found.
      </p>
    </div>
  );
}
