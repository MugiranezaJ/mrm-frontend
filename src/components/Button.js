import React  from "react";

const Button = ({ value, label, name, placeholder, type, onChange, className }) => (
    <div>
        <button
        type={type}
        name={name}
        className={className}
        //   placeholder={placeholder}
        //   onChange={onChange}
        >{value}</button>
    </div>
);

export default Button;