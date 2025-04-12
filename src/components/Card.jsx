import React from "react";

export const Card = ({ title, children, footer, className }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-4 space-y-2 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      )}
      <div>{children}</div>
      {footer && (
        <div className="pt-2 border-t text-sm text-gray-500">{footer}</div>
      )}
    </div>
  );
};
