"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-black">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold">ReferNet</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-600 ">Explore</Link>
          <Link href="/signup" className="hover:text-gray-600">Join US</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 leading-tight"
        >
          Bridging <span className="text-gray-700">Students</span> &{" "}
          <span className="text-gray-700">Professionals</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl text-lg text-gray-600 mb-8"
        >
          Build meaningful connections and get referred to top opportunities.
          Upload your resume, get feedback, and grow your career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-x-4"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-2">
          <Link
            href="/signup"
            className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
          >
            Working Professional?
          </Link>
          <Link
            href="/upload"
            className="px-6 py-3 border border-black font-semibold rounded-md hover:bg-black hover:text-white transition"
          >
            User SignUp?
          </Link>
          <Link
            href="/landingpage"
            className="px-6 py-3 border border-black font-semibold rounded-md hover:bg-black hover:text-white transition"
          >
            Exploring The Platform
          </Link>
          </div>
        </motion.div>
      </section>

      {/* Why ReferNet Section */}
      <section className="py-16 px-6 border-t border-gray-200">
        <h2 className="text-center text-3xl font-bold mb-12">
          Why Choose ReferNet?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">AI Resume Screening</h3>
            <p className="text-gray-600">
              Let our AI analyze your resume and suggest improvements to increase your chances of being referred.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Verified Referrals</h3>
            <p className="text-gray-600">
              Connect with professionals who offer genuine, verified job referrals within top companies.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Real Feedback</h3>
            <p className="text-gray-600">
              Receive authentic resume and interview feedback from experienced industry professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-gray-200 text-gray-500 text-sm">
        © {new Date().getFullYear()} ReferNet — Built with ❤️ by Vineet Pandey
      </footer>
    </main>
  );
}
