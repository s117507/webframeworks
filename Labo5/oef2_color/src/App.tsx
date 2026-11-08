import React, { useState } from "react";

const COLORS = [
  { value: "red", label: "Red" },
  { value: "black", label: "Black" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "yellow", label: "Yellow" },
  { value: "orange", label: "Orange" },
];

const MultiSelect = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [flag, setFlag] = useState<string[]>([]);

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedColors(Array.from(e.target.selectedOptions, (option) => option.value));
  };

  const makeFlag = () => {
    setFlag([...selectedColors]);
  };

  const changeColor = (index: number) => {
    const newColor = prompt("Geef een nieuwe kleur in", flag[index])?.trim();

    if (!newColor) return;

    if (!CSS.supports("color", newColor)) {
      alert(`"${newColor}" is geen geldige kleur`);
      return;
    }

    setFlag((prev) => prev.map((color, i) => (i === index ? newColor : color)));
  };

  return (
    <div style={{ width: "100%" }}>
      <select multiple value={selectedColors} onChange={onChange}>
        {COLORS.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>

      <button
        style={{ display: "block" }}
        onClick={makeFlag}
        disabled={selectedColors.length === 0}
      >
        Show Colors
      </button>

      {flag.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", height: 200 }}>
          {flag.map((color, index) => (
            <div
              key={index}
              style={{ flex: 1, backgroundColor: color, cursor: "pointer" }}
              onClick={() => changeColor(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;