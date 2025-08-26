import Link from "next/link";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import BannerSlider from "./Components/Navbar/Banner/Banner";

export default function HomePage() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <BannerSlider></BannerSlider>
      {/* Product Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-8 text-center">
          Product Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card */}
          {[
            { name: "Laptop", desc: "High performance laptop", price: 1200 },
            { name: "Smartphone", desc: "Latest Android device", price: 800 },
            {
              name: "Headphones",
              desc: "Noise cancelling headphones",
              price: 200,
            },
          ].map((p, i) => (
            <div
              key={i}
              className="border rounded-xl shadow-sm p-6 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-2">{p.name}</h4>
              <p className="text-gray-600 mb-2">{p.desc}</p>
              <p className="text-blue-600 font-semibold">${p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-6 text-center">
        <p>© {new Date().getFullYear()} NextShop. All rights reserved.</p>
      </footer>
    </div>
  );
}
