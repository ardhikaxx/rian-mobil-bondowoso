"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-[300ms] ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.97]";

    const variants = {
      primary:
        "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:ring-red-500 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:brightness-110",
      secondary:
        "bg-gradient-to-r from-gray-900 to-black text-white hover:from-gray-800 hover:to-gray-900 focus:ring-gray-500 shadow-lg",
      outline:
        "border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:ring-gray-400 bg-white",
      whatsapp:
        "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 focus:ring-green-400 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:brightness-110",
      ghost:
        "text-gray-600 hover:bg-gray-100 focus:ring-gray-400",
      danger:
        "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-400 shadow-lg shadow-red-500/25",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-2.5 text-sm gap-2",
      lg: "px-8 py-3.5 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
