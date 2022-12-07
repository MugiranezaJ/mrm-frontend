import React  from "react";

const SneakBar = ({ message, type, className }) => (
    <div className={className} style={type == 'success' ? { backgroundColor: 'green'} : { backgroundColor: "#ff5b5b"} }>
        {message}
    </div>
);

export default SneakBar;