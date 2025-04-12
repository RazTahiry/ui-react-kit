import React, { useEffect } from "react";

export const Modal = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn ${className}`}
    >
      <div
        className={`bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative transform transition-transform duration-300`}
      >
        <button
          onClick={onClose}
          className="absolute text-semibold flex justify-center items-center top-2 right-2 w-[35px] h-[35px] text-gray-800 hover:bg-gray-200 rounded-full p-1 transition duration-300 ease-in-out cursor-pointer"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
