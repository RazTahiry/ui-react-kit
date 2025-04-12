import React from "react";

export const Tooltip = ({ children, text, position = "top" }) => {
  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
    left: "right-full top-1/2 -translate-y-1/2 mr-1",
    right: "left-full top-1/2 -translate-y-1/2 ml-1",
  };

  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute opacity-0 group-hover:opacity-100 transition z-50 bg-gray-700 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap ${positions[position]}`}
      >
        {text}
      </div>
    </div>
  );
};
