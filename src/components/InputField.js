import React  from "react";

const InputField = ({min, label, name, placeholder, type, onChange, className }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      required
      name={name}
      className={className}
      placeholder={placeholder}
      min={min}
      onChange={onChange}
    />
  </div>
);

export default InputField;