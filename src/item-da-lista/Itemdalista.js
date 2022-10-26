import React from "react";
import "./itemdalista.css"
import Tarefas from "../tarefas/Tarefas";

const Itemdalista = ({itens}) =>{
    return <>
                {itens.map((item) => (
                    <Tarefas item={item}/>
                ))}
            </>
};

export default Itemdalista;