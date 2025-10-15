"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
          {/* Footer Content */}
          <div>
            <h2 className="text-lg font-semibold mb-3">REFERNET</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati.
              Ducimus, quas. Corrupti, pariatur eaque?
            </p>
          </div>

          {/* Footer Links */}
          {[1, 2, 3, 4].map((col) => (
            <div key={col}>
              <h2 className="text-lg font-semibold mb-3">LINKS</h2>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Register Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 border-b border-gray-700 py-8">
          <p className="text-gray-300 text-sm">Register for free</p>
          <button className="bg-white text-gray-800 font-semibold px-5 py-2 rounded-full hover:bg-gray-300 transition-all">
            SIGN UP!
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 py-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-xl"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-xl"
          >
            <FaGoogle />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-xl"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Copyright:{" "}
          <span className="text-gray-300 font-medium">ReferNet</span>
        </div>
      </div>
    </footer>
  );
}
