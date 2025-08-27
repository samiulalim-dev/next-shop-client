"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/products");
      toast.success("Successfully Logged IN 🎉");
    }
  }, [session?.status, router]);

  return (
    <button
      onClick={() => handleSocialLogin("google")}
      className="w-full flex items-center justify-center gap-2  border-[#FF324D] border-2 py-2 rounded-full font-semibold bg-white cursor-pointer hover:bg-gray-100 transition"
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
      Login with Google
    </button>
  );
}
