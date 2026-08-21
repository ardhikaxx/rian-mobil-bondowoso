interface BadgeProps {
  variant?: "default" | "success" | "warning" | "info" | "danger" | "premium";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-700 border border-gray-200",
    success: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-100 text-amber-700 border border-amber-200",
    info: "bg-red-50 text-red-700 border border-red-200",
    danger: "bg-red-100 text-red-700 border border-red-200",
    premium: "bg-red-600 text-white border border-red-500",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
