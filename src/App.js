import React from "react";
import "./index.css"
import "./BarraPesquisa/BarraPesquisa"
import BarraPesquisa from "./BarraPesquisa/BarraPesquisa";

const App = () =>{
  const message = "hello world";
  return <div className="container">
            <h1>{message}</h1>
            <BarraPesquisa></BarraPesquisa>
          </div>
};

export default App;