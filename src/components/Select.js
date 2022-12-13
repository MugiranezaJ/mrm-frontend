import React  from "react";

const Select = ({ defaultValue, className, name, label, options=[] }) => (
  <div>
    {label && <label htmlFor="input-field">{label}</label>}
    <select
      className={className}
      defaultValue={defaultValue}
      name={name}>
      {
        options.map((item, index) => (
            <option key={index} value={item}>{item}</option>
        ))
      }
    </select>
  </div>
);

export default Select;