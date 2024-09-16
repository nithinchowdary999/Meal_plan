import React, { useState, useRef, useEffect } from "react";

export const Select = ({ onValueChange, children, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (newValue) => {
    onValueChange(newValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Find the selected item
  const selectedItem = React.Children.toArray(children).find(
    (child) => child.props.value === value
  );

  return (
    <div className="relative" ref={selectRef}>
      <SelectTrigger onClick={() => setIsOpen(!isOpen)}>
        <SelectValue>
          {selectedItem ? selectedItem.props.children : "Select an option"}
        </SelectValue>
      </SelectTrigger>
      {isOpen && (
        <SelectContent>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onSelect: handleSelect })
          )}
        </SelectContent>
      )}
    </div>
  );
};

export const SelectTrigger = ({ children, onClick }) => (
  <button
    className="w-full p-2 text-left bg-white border rounded-md flex justify-between items-center"
    onClick={onClick}
  >
    {children}
    <span className="ml-2">▼</span>
  </button>
);

export const SelectValue = ({ children }) => <span>{children}</span>;

export const SelectContent = ({ children }) => (
  <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
    {children}
  </div>
);

export const SelectItem = ({ children, value, onSelect }) => (
  <div
    className="p-2 cursor-pointer hover:bg-gray-100"
    onClick={() => onSelect(value)}
  >
    {children}
  </div>
);
