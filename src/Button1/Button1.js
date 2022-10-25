import React from "react";
import "./Button1.css"

const Button1 = ({children, onClick}) =>{
    return <div className="box">
                <button className="btn" onClick={onClick}>{children}</button>
            </div> 
};
export default Button1;
