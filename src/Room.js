import React, {useState} from 'react';

function App() {
let [isLit, setLit] = useState(true);
let [fan, setFan] = useState(false);
let [ac, setAC] = useState(false);

function updateLit(){
  console.log("Button clicked");
  setLit(!isLit);
}

  return (
    <div>
      Room Light {isLit? "Lit": "Dark"}
      <br/>
      <button onClick={updateLit} >Toggle Light</button>
      <br/>
      Room Fan is {fan? "On": "Off"}
      <br/>
      <button onClick={ ()=> {
      console.log("Button clicked");
      setFan(!fan);
      }} >Toggle Fan</button>
      <br/>
      Room AC is {ac? "On": "Off"}
      <br/>
      <button onClick={()=> setAC(!ac)} >Toggle AC</button>
    </div>
  );
}
 
export default App;
