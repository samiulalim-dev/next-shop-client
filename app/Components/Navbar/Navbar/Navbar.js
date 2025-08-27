"use client";
import { useState } from "react";
import Link from "next/link";
import { MdArrowDropDown, MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const pathname = usePathname();
  console.log(status);

  // Helper function for active link
  const linkClass = (path) =>
    `font-medium transition ${
      pathname === path
        ? "text-[#FF324D] border-b-2 border-[#FF324D]"
        : "text-black hover:text-[#FF324D]"
    }`;

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
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
          {/* Dashboard Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDashboardOpen(!dashboardOpen)}
              className="cursor-pointer flex items-center text-black hover:text-[#FF324D] font-medium"
            >
              Dashboard <MdArrowDropDown size={18} className="ml-1" />
            </button>

            {dashboardOpen && (
              <div className="absolute mt-4 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
                <Link
                  href="/dashboard/add-product"
                  className="block px-4 py-2 text-black hover:bg-[#ff6900]/10 hover:text-[#FF324D]"
                >
                  Add Product
                </Link>
              </div>
            )}
          </div>
          <div>
            {status === "authenticated" ? (
              <button
                className="border-2 px-4 py-2 rounded-lg font-semibold transition"
                style={{
                  cursor: "pointer",
                  borderColor: "#FF324D",
                  color: "#FF324D",
                }}
                onClick={() => signOut()}
              >
                Log Out
              </button>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
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
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={linkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className={linkClass("/products")}
          >
            Products
          </Link>

          <div>
            {status === "authenticated" ? (
              <button
                className="border-2 px-4 py-2 rounded-lg font-semibold transition"
                style={{
                  cursor: "pointer",
                  borderColor: "#FF324D",
                  color: "#FF324D",
                }}
                onClick={() => signOut()}
              >
                Log Out
              </button>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
