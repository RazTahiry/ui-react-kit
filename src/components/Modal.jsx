import React, { useEffect, useState } from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden"; 
    } else {
      setVisible(false);
      document.body.style.overflow = ""; 
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn">
      <div
        className={`bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative transform transition-transform duration-300 
          ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <button
          onClick={onClose}
          className="absolute flex justify-center items-center top-2 right-2 w-[35px] h-[35px] text-gray-800 hover:bg-gray-200 rounded-full p-1 transition duration-300 ease-in-out cursor-pointer"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
