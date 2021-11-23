import React from "react";

function SelectFilter({ defaultValue, options, value, onChange }) {
  return (
    <select
      name="filter"
      size="4"
      className="input-field col s12"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="disabled">
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export { SelectFilter };
