import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <MdOutlineShoppingCart className="text-5xl text-[#FF324D]" />
            <h1 className="text-3xl font-bold text-white">ShopNest</h1>
          </Link>
          <p className="text-gray-400">
            ShopNest is your one-stop shop for the best products online. Quality
            products, fast delivery, and excellent customer service.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white transition">
                Products
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-white transition">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Email: support@nextshop.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
