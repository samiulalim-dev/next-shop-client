import Link from "next/link";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    description: "Latest Apple smartphone with A17 chip",
    price: 1200,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    description: "Flagship Samsung phone with amazing camera",
    price: 1100,
  },
  {
    id: 3,
    name: "OnePlus 12",
    description: "High performance phone with clean OS",
    price: 900,
  },
];

export default function ProductsPage() {
  return (
    <div className="w-11/12 mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold text-[#FF324D] mt-4">
                ${product.price}
              </p>
            </div>
            <Link
              href={`/products/${product.id}`}
              className="mt-6 inline-block bg-[#FF324D] text-white px-4 py-2 rounded-full text-center hover:bg-[#e02e42] transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
