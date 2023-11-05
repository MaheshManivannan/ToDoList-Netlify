import React from "react";
const Footer = ({length}) => {
    
    return (
        <>
        <h4 style={{color: '#b30000',backgroundColor: "#ff9999"}}>{length} List {(length > 1) ? "Items" : "Item"}</h4>
        </>
    );
}
export default Footer;
