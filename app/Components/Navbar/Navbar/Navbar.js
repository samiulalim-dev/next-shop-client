"use client";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 left-0 z-10">
      <div className="w-11/12 mx-auto  py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1">
          <MdOutlineShoppingCart className="text-5xl text-[#FF324D]" />
          <h1 className="text-3xl font-bold text-black">ShopNest</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-black font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/login">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose className="text-3xl text-black" />
            ) : (
              <HiOutlineMenuAlt4 className="text-3xl text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-400  bg-white shadow-md w-full px-6 py-4 flex flex-col space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
