import React, { useState, useRef, useEffect } from "react";

export const InputSelect = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Sélectionner...",
  className = "",
  error = "",
  searchable = false,
  multiple = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (val) => {
    if (multiple) {
      const exists = value.includes(val);
      const newValue = exists
        ? value.filter((v) => v !== val)
        : [...value, val];
      onChange?.(newValue);
    } else {
      onChange?.(val);
      setIsOpen(false);
    }
  };

  const isSelected = (val) => (multiple ? value.includes(val) : value === val);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedLabels = () => {
    if (multiple && Array.isArray(value)) {
      return options
        .filter((opt) => value.includes(opt.value))
        .map((opt) => opt.label)
        .join(", ");
    }
    const opt = options.find((o) => o.value === value);
    return opt?.label || "";
  };

  return (
    <div className="flex flex-col gap-1 relative" ref={ref}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <div
        className={`w-full border rounded p-2 bg-white flex items-center justify-between cursor-pointer ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={selectedLabels() ? "text-black" : "text-gray-400"}>
          {selectedLabels() || placeholder}
        </span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 bg-white border rounded shadow-lg mt-1 w-full max-h-60 overflow-y-auto">
          {searchable && (
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher..."
              className="w-full p-2 border-b border-gray-200 outline-none text-sm"
            />
          )}
          {filteredOptions.map((opt) => (
            <div
              key={opt.value}
              onClick={() => toggleOption(opt.value)}
              className={`p-2 text-sm cursor-pointer flex items-center justify-between hover:bg-gray-100 transition duration-300 ${
                isSelected(opt.value) ? "bg-blue-50" : ""
              }`}
            >
              {opt.label}
              {isSelected(opt.value) && (
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          ))}
          {filteredOptions.length === 0 && (
            <div className="p-2 text-sm text-gray-500">Aucun résultat</div>
          )}
        </div>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
