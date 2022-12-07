import React  from "react";

const Select = ({ onChange, className, name, label }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <select className={className} name={name}>
        <option defaultValue={0} value="0">Patient</option>
        <option value="1">Admin</option>
        <option value="2">Pharmacist</option>
        <option value="3">Physicist</option>
    </select>
  </div>
);

export default Select;