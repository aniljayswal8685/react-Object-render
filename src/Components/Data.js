import React from 'react'
import App from '../App'
function Data(props){
  const data="Anil pd JAyswal"
  
  return(
    <div>
      <h2>Child</h2>
      {/* <App item={Childprop}/> */}
      <button onClick={()=>props.alert(data)}>Click Here</button>
    </div>

  );
}
export default Data;