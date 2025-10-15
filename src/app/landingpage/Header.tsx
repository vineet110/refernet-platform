"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger + close icons

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (path: string) =>
    `hover:text-black hover:scale-110 transition-transform duration-200 ${
      pathname === path ? "underline text-black" : "text-gray-700"
    }`;

  return (
    <header className="border-b py-4">
      <nav className="flex justify-between items-center px-4 md:px-10">
        {/* Logo or Brand Name */}
        <h1 className="text-xl font-semibold">ReferNet</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-14 text-lg">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link
            href="/landingpage/about"
            className={linkClass("/landingpage/about")}
          >
            About
          </Link>
          <Link
            href="/landingpage/compare"
            className={linkClass("/landingpage/compare")}
          >
            Compare
          </Link>
          <Link
            href="/landingpage/testimonials"
            className={linkClass("/landingpage/testimonials")}
          >
            Testimonials
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleMenu} className="text-3xl text-gray-700">
            <FiX />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6 text-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={linkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/landingpage/about"
            onClick={() => setIsOpen(false)}
            className={linkClass("/landingpage/about")}
          >
            About
          </Link>
          <Link
            href="/landingpage/compare"
            onClick={() => setIsOpen(false)}
            className={linkClass("/landingpage/compare")}
          >
            Compare
          </Link>
          <Link
            href="/landingpage/testimonials"
            onClick={() => setIsOpen(false)}
            className={linkClass("/landingpage/testimonials")}
          >
            Testimonials
          </Link>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}
