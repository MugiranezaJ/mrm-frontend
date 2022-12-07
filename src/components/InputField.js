import React  from "react";

const InputField = ({ value, label, name, placeholder, type, onChange, className }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
    //   value={value}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;