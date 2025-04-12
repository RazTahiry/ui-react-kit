import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

export const Dropdown = ({
  trigger,
  position = "bottom",
  children,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const positions = {
    top: "bottom-full mb-1 left-0",
    bottom: "top-full mt-1 left-0",
    left: "right-full mr-1 top-0",
    right: "left-full ml-1 top-0",
  };

  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setOpen((o) => !o)}>{trigger}</div>
      {open && (
        <div
          className={classNames(
            "absolute z-10 bg-white rounded shadow-md min-w-[150px]",
            positions[position],
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
