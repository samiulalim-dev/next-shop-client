"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialLogin from "./googleLogin";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/products");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
    } catch (error) {
      // console.log(error);
      toast.error("FAILED to Log In");
    }
  };

  return (
    <div className="  w-11/12 sm:max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-2xl">
      <form onSubmit={handleSubmit} className="">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF324D]"
            name="email"
            required
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF324D]"
            name="password"
            required
            placeholder="Enter Your Password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#FF324D] text-white py-2 rounded-full font-semibold hover:bg-[#e02e42] transition mb-4"
        >
          Login
        </button>
      </form>
      <div className="flex items-center justify-center mb-4">
        <hr className="flex-grow border-t-2 border-gray-300" />
        <span className="mx-4 text-black-500 font-medium">or</span>
        <hr className="flex-grow border-t-2 border-gray-300" />
      </div>

      <div>
        <SocialLogin></SocialLogin>
      </div>

      <span className="flex text-sm items-center justify-center mt-4 ">
        Don't have an account ?{" "}
        <Link
          href="/register"
          className="text-[#FF324D] font-semibold hover:underline"
        >
          Register
        </Link>
      </span>
    </div>
  );
}
