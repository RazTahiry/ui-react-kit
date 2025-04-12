import React from "react";

export const InputRadio = ({
  label,
  value,
  name,
  checked,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <label
      className={`inline-flex items-center space-x-2 text-sm cursor-pointer ${className}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`form-radio h-4 w-4 cursor-pointer ${className}`}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
};
