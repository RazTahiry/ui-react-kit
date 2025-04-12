import React from "react";

export const SkeletonLoader = ({
  className = "",
  width = "w-full",
  height = "h-4",
  rounded = "rounded-md",
}) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${width} ${height} ${rounded} ${className}`}
    ></div>
  );
};
