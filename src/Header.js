import React from "react";
const Header = ({title}) => {

    return (
    <>
    <h1 style={{color: "blue",backgroundColor: "skyblue"}}>{title}</h1>
    </>
    );
}
Header.defaultProps = {
    title : "To Do List Application"
}
export default Header;
