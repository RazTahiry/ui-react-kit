import React from "react";

const VARIANTS = {
  primary: "file:bg-blue-600 file:text-white hover:file:bg-blue-700",
  secondary: "file:bg-gray-600 file:text-white hover:file:bg-gray-700",
  danger: "file:bg-red-600 file:text-white hover:file:bg-red-700",
  outline:
    "file:bg-transparent file:border file:border-gray-400 file:text-gray-800 hover:file:bg-gray-200",
};

export const InputFile = ({
  label,
  onChange,
  variant = "primary",
  name = "",
  accept = "",
  error = "",
  className = "",
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type="file"
        name={name}
        onChange={onChange}
        accept={accept}
        className={`block w-full text-sm text-gray-500 file:mr-2 file:py-2 file:px-4
          file:rounded file:text-sm file:font-semibold file:cursor-pointer file:border transition-all ease-in-out duration-300 ${
            VARIANTS[variant] ?? VARIANTS.primary
          }`}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
