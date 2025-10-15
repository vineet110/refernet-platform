"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ReferNet
        </Link>

        {/* Nav */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/upload" className="hover:text-blue-600">Upload Resume</Link>
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/auth/login" className="hover:text-blue-600">Login</Link>
        </nav>
      </div>
    </header>
  );
}
