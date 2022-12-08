import React  from "react";

const Button = ({ value, label, name, placeholder, type, onClick, className }) => (
    <div>
        <button
        type={type}
        name={name}
        className={className}
        //   placeholder={placeholder}
          onClick={onClick}
        >{value}</button>
    </div>
);

export default Button;