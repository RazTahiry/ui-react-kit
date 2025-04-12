import React, { useEffect, useState } from "react";

export const Toast = ({
  message,
  type = "info",
  duration = 3000,
  position = "top-right",
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Apparition (fade-in)
    setVisible(true);

    // Disparition (fade-out)
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, duration - 300); // Commence la sortie un peu avant

    // Suppression complète après disparition
    const removeTimer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [duration, onClose]);

  const colors = {
    info: "bg-blue-500",
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500 text-black",
  };

  const positions = {
    "top-right": "top-5 right-5",
    "top-left": "top-5 left-5",
    "bottom-right": "bottom-5 right-5",
    "bottom-left": "bottom-5 left-5",
  };

  return (
    <div
      className={`fixed px-4 py-2 rounded text-white shadow-lg transition-opacity duration-300 ease-in-out z-50 
        ${visible ? "opacity-100" : "opacity-0"} 
        ${colors[type] ?? "bg-gray-500"} 
        ${positions[position] ?? "top-5 right-5"}`}
      onClick={onClose}
    >
      {message}
    </div>
  );
};
