import type React from "react";

interface IStatusProps {
  variant: "success" | "danger" | "neutral";
}

export const StatusIndicator: React.FC<IStatusProps> = ({ variant }) => {
  const variantStyle = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    neutral: "bg-gray-100 text-gray-700",
  };

  return (
    <div
      className={`${variantStyle[variant]} text-xs font-medium px-3 py-1 rounded-full `}
    >
      {variant === "success" && "High perfomer"}
      {variant === "danger" && "At Risk"}
      {variant === "neutral" && "Stable"}
    </div>
  );
};
