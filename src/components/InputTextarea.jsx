import React from "react";

export const InputTextarea = ({
  label,
  value,
  onChange,
  placeholder = "",
  error = "",
  name = "",
  rows = 4,
  className = "",
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`p-2 rounded border focus:outline-none transition duration-300 resize-none ${className} ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...rest}
      ></textarea>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
