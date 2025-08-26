import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import RouteLoader from "./Components/RouteLoader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Next Shop",
  description: "Create by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
  <Navbar />
  <RouteLoader />
  <main>{children}</main>
  <ToastContainer position="top-center" autoClose={2000} />
  <Footer />
      </body>
    </html>
  );
}
