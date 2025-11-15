"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">
            Gravity Group RSA
          </span>
        </Link>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div
          className={clsx(
            "md:flex md:items-center gap-6",
            open ? "block mt-4" : "hidden md:block"
          )}
        >
          <Link href="/" className="hover:text-brand-accent">Home</Link>
          <Link href="/services" className="hover:text-brand-accent">
            Services
          </Link>
          <Link href="/about" className="hover:text-brand-accent">About</Link>
          <Link href="/contact" className="hover:text-brand-accent">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
