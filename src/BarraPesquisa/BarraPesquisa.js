import React, {useState}  from "react";
import "./BarraPesquisa.css"
import Button1 from "../Button1/Button1";


const BarraPesquisa = () =>{
    const [inputData, setIputData] = useState("");

    const handleInputChange = (e) =>{
        setIputData(e.target.value);
        console.log(e.target.value);
    };

    return <div className="box">
                <input onChange={handleInputChange}
                value={inputData}
                type={"text"} 
                className="searchbar"/>
                <div className="buttonContainer">
                    <Button1 className="button">buscar</Button1>
                </div>
            </div> 
};
export default BarraPesquisa;
