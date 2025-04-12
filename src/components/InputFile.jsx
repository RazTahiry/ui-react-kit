import React from "react";

export const InputFile = ({
  label,
  onChange,
  name = "",
  accept = "",
  error = "",
  className = "",
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type="file"
        name={name}
        onChange={onChange}
        accept={accept}
        className={`block w-full text-sm text-gray-500 file:mr-2 file:py-2 file:px-4
          file:rounded file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 file:cursor-pointer file:border ${className}`}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
