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
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg shadow-red-600/20 hover:shadow-red-600/40",
      secondary:
        "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-lg",
      outline:
        "border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:ring-gray-400 bg-white",
      whatsapp:
        "bg-green-600 text-white hover:bg-green-700 focus:ring-green-400 shadow-lg shadow-green-600/20 hover:shadow-green-600/40",
      ghost:
        "text-gray-600 hover:bg-gray-100 focus:ring-gray-400",
      danger:
        "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 shadow-lg shadow-red-500/20",
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
