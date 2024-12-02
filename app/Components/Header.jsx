"use client"
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 z-1 p-4">
      <div className="flex justify-evenly items-center">
        {/* Header Title */}
        <p className="text-4xl font-extrabold text-white">FM</p>

        {/* Hamburger Menu (Visible on small screens) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex space-x-4 md:flex-row md:space-x-8 ${
            isOpen ? "flex-col space-y-4" : "hidden"
          } md:flex md:items-center md:space-x-8`}
        >
          <li>
            <Link className="text-white hover:bg-gray-700 px-4 py-2 rounded" href="/">
              Dash
            </Link>
          </li>
          <li>
            <Link className="text-white hover:bg-gray-700 px-4 py-2 rounded" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white hover:bg-gray-700 px-4 py-2 rounded" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <a
              className="text-white hover:bg-gray-700 px-4 py-2 rounded"
              href="/Fredrick-mwaura.pdf"
              download="Fredrick-mwaura.pdf"
            >
              Resume
            </a>
          </li>
          <li>
            <Link className="text-white hover:bg-gray-700 px-4 py-2 rounded" href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
