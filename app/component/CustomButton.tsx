import React from "react";

type CustomButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export function CustomButton({ onClick, children, className }: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 ${className || ""}`}
    >
      {children}
    </button>
  );
}