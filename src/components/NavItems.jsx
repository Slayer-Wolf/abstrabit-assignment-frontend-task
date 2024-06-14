import React from "react";
export const NavItems = () => {
  return (
    <div className="flex flex-col gap-16">
      <a
        href="/"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        Home
      </a>
      <a
        href="/tasks"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        Dashboard
      </a>
      <a
        href="/auth/signin"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        FAQ
      </a>
      <a
        href="/auth/signup"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        Support
      </a>
    </div>
  );
};
