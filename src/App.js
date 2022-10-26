import React, { useState } from "react";
import "./index.css"
import "./BarraPesquisa/BarraPesquisa"
import BarraPesquisa from "./BarraPesquisa/BarraPesquisa";
import Itemdalista from "./item-da-lista/Itemdalista";
import Tarefas from "./tarefas/Tarefas";
import Button1 from "./Button1/Button1";

import {v4 as uuidv4} from "uuid";

const App = () =>{
  const message = "hello world";

  const [tasks, setTasks] = useState([
    {
      id:"1",
      title:"estudar React",
      completed:false,
    },
    {
      id:"2",
      title:"Ler mais",
      completed:true,
    },
  ]);

  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [...tasks, {
      title:taskTitle,
      id:uuidv4(),
      completed:false,
    }];

    setTasks(newTasks);
  };

  return <div className="container">
            <h1>{message}</h1>
            <div className="area-de-pesquisa">
              <BarraPesquisa className="barra-pesquisa" handleTaskAddition={handleTaskAddition}></BarraPesquisa>
            </div>
            <Itemdalista itens={tasks}></Itemdalista>
          </div>
};

export default App;