import React from "react";
import "./style.css";
import Data from "./Components/Data"
export default function App(props) {
  function Childprop (data){
    alert(data);
  }
  return (
    <div>
      <h2>Parent</h2>
      {/* <button onClick={props.alert}>Click Me</button> */}
      <Data alert={Childprop}/>
      
    </div>
  );
}
