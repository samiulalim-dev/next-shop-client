"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Registration successful! Logging in...");
        setName("");
        setEmail("");
        setPassword("");
        // Auto-login after registration
        setTimeout(() => {
          signIn("credentials", {
            redirect: true,
            email,
            password,
            callbackUrl: "/products",
          });
        }, 1200);
      } else {
        setError(data.error || "Registration failed.");
        toast.error(data.error || "Registration failed.");
      }
    } catch (err) {
      setError("Registration failed.");
      toast.error("Registration failed.");
    }
  };

  return (
    <div className="py-10 w-11/12 mx-auto flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF324D]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF324D]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF324D]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Your Password"
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#FF324D] text-white py-2 rounded-full font-semibold hover:bg-[#e02e42] transition"
        >
          Register
        </button>
        <div className="flex items-center justify-center mb-4">
          <hr className="flex-grow border-t-2 border-gray-300" />
          <span className="mx-4 text-black-500 font-medium">or</span>
          <hr className="flex-grow border-t-2 border-gray-300" />
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2  border-[#FF324D] border-2 py-2 rounded-full font-semibold bg-white cursor-pointer hover:bg-gray-100 transition"
          onClick={() => signIn("google", { callbackUrl: "/products" })}
        >
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
            <g>
              <path
                fill="#4285F4"
                d="M24 9.5c3.54 0 6.73 1.22 9.24 3.22l6.9-6.9C35.64 2.34 30.13 0 24 0 14.64 0 6.27 5.48 1.98 13.44l8.06 6.27C12.18 13.13 17.62 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.1 24.55c0-1.64-.15-3.22-.43-4.75H24v9.02h12.44c-.54 2.9-2.18 5.36-4.65 7.02l7.23 5.62C43.98 37.13 46.1 31.36 46.1 24.55z"
              />
              <path
                fill="#FBBC05"
                d="M10.04 28.71c-.56-1.67-.88-3.45-.88-5.21s.32-3.54.88-5.21l-8.06-6.27C.64 15.87 0 19.82 0 24c0 4.18.64 8.13 1.98 11.98l8.06-6.27z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.13 0 11.64-2.03 15.57-5.53l-7.23-5.62c-2.01 1.35-4.59 2.15-8.34 2.15-6.38 0-11.82-3.63-14.96-8.94l-8.06 6.27C6.27 42.52 14.64 48 24 48z"
              />
            </g>
          </svg>
          Register with Google
        </button>
        <span className="flex text-sm items-center justify-center mt-4 ">
          Already have an account ?{" "}
          <Link
            href="/login"
            className="text-[#FF324D] font-semibold hover:underline"
          >
            Log in
          </Link>
        </span>
      </form>
    </div>
  );
}
