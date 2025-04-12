import React from "react";

export const InputCheckbox = ({
  label,
  checked,
  onChange,
  name = "",
  className = "",
  color = "blue",
  ...rest
}) => {
  const allowedColors = {
    blue: "text-blue-600",
    red: "text-red-600",
    green: "text-green-600",
  };

  const colorClass = allowedColors[color] || "text-blue-600";

  return (
    <label
      className={`inline-flex items-center space-x-2 text-sm text-gray-700 cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={`form-checkbox w-5 h-5 rounded cursor-pointer ${colorClass}`}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
};
