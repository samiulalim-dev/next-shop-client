"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/component/googleLogin";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({ name, email, password });
    toast.success("Register Successful! Please Login Now");
    form.reset();
  };

  return (
    <div className="py-10 w-11/12 sm:max-w-md bg-white p-8 rounded-lg shadow-2xl mx-auto  ">
      <form onSubmit={handleSubmit} className="">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF324D]"
            name="name"
            required
            placeholder="Enter Your Name"
          />
        </div>
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
          className="w-full bg-[#FF324D] text-white py-2 rounded-full font-semibold hover:bg-[#e02e42] transition"
        >
          Register
        </button>
      </form>
      <div className="flex items-center justify-center mb-4">
        <hr className="flex-grow border-t-2 border-gray-300" />
        <span className="mx-4 text-black-500 font-medium">or</span>
        <hr className="flex-grow border-t-2 border-gray-300" />
      </div>
      <SocialLogin></SocialLogin>
      <span className="flex text-sm items-center justify-center mt-4 ">
        Already have an account ?{" "}
        <Link
          href="/login"
          className="text-[#FF324D] font-semibold hover:underline"
        >
          Log in
        </Link>
      </span>
    </div>
  );
}
