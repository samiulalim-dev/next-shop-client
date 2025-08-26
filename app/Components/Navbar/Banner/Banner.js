"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BannerSlider() {
  const slides = [
    {
      src: "/images/banner2.jpg",
      title: "Huge Discounts",
      subtitle: "Grab your favorite items now",
    },
    {
      src: "/images/banner3.jpg",
      title: "New Arrivals",
      subtitle: "Check out the latest collection",
    },
    {
      src: "/images/banner1.jpg",
      title: "Smart Watches",
      price: "100",
      subtitle: "Best products",
    },
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      {slides.map((slide, i) => (
        <div key={i} className="h-64 md:h-[450px] w-full bg-slate-100   ">
          {/* Text */}
          <div className="flex items-center justify-between  w-11/12 mx-auto">
            <div className=" text-left text-black ">
              <h2 className="text-lg md:text-6xl font-bold">{slide.title}</h2>
              <span className="text-md font-semibold text-[#FF324D]">
                {slide.price ? ` $ ${slide.price}` : ""}
              </span>
              <p className=" text-sm md:text-lg mt-2">{slide.subtitle}</p>
              <button className="mt-4 px-2 text-sm sm:text-lg md:px-6 py-2 bg-[#FF324D] text-white rounded-full hover:bg-[#e0223f] transition">
                Shop Now
              </button>
            </div>
            <div>
              <img src={slide.src} alt={`Banner ${i + 1}`} className="" />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
