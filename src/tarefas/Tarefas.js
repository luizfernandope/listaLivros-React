import React from "react";
import "./Tarefas.css";

const Tarefas = ({item}) => {
    
    return <>
                <div className="container-conteudo">
                    <p>{item.title}</p>
                </div>
           </>
};

export default Tarefas;