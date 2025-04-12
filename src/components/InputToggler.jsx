import React from "react";

export const Toggler = ({
  label = "",
  checked = false,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          {...rest}
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition duration-300"></div>
        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
      </label>
    </div>
  );
};
