import React from "react";
import classNames from "classnames";

const VARIANTS = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline:
    "bg-transparent border border-gray-400 text-gray-800 hover:bg-gray-200",
};

export const Button = ({
  children,
  variant = "primary",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={classNames(
        "relative px-4 py-2 rounded font-medium text-sm transition-all duration-300 ease-in-out focus:outline-none",
        VARIANTS[variant] ?? VARIANTS.primary,
        { "opacity-50 cursor-not-allowed": disabled || loading },
        { "cursor-pointer": !disabled && !loading },
        className
      )}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-1">
            <div
              className={classNames(
                "w-1.5 h-2 rounded-full animate-bounce [animation-delay:-0.3s]",
                { "bg-gray-600": loading && variant === "outline" },
                { "bg-white": loading && variant !== "outline" }
              )}
            ></div>
            <div
              className={classNames(
                "w-1.5 h-2 rounded-full animate-bounce [animation-delay:-0.15s]",
                { "bg-gray-600": loading && variant === "outline" },
                { "bg-white": loading && variant !== "outline" }
              )}
            ></div>
            <div
              className={classNames(
                "w-1.5 h-2 rounded-full animate-bounce",
                {
                  "bg-gray-600": loading && variant === "outline",
                },
                { "bg-white": loading && variant !== "outline" }
              )}
            ></div>
          </div>
        </div>
      )}

      <span className={loading ? "invisible" : "visible"}>{children}</span>
    </button>
  );
};
