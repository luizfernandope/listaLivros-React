import React, {useState}  from "react";
import "./BarraPesquisa.css"
import Button1 from "../Button1/Button1";


const BarraPesquisa = ({handleTaskAddition}) =>{
    const [inputData, setIputData] = useState("");

    const handleInputChange = (e) =>{
        setIputData(e.target.value);
        console.log(e.target.value);
    };

    const handleAddTaskClick = () =>{
        handleTaskAddition(inputData);
        setIputData("");
    };

    return <div className="box">
                <input 
                onChange={handleInputChange}
                value={inputData}
                type="text" 
                className="searchbar"
                />
                <div className="btn">
                    <Button1 onClick={handleAddTaskClick}>adicionar</Button1>
                </div>
            </div>
};
export default BarraPesquisa;
