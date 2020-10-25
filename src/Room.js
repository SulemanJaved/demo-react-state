import React, {useState} from 'react';

function Room() {
let [isLit, setLit] = useState(true);
let [fan, setFan] = useState(false);
let [ac, setAC] = useState(false);

function updateLit(){
  console.log("Button clicked");
  setLit(!isLit);
}

  return (
    <div>
      <strong>Control Room</strong>
      <br/>
      <br/>
      Room Light is <strong>{isLit? "Lit": "Dark"}</strong>
      <br/>
      <button onClick={updateLit} >Toggle Light</button>
      <br/>
      Room Fan is <strong>{fan? "On": "Off"}</strong>
      <br/>
      <button onClick={ ()=> {
      console.log("Button clicked");
      setFan(!fan);
      }} >Toggle Fan</button>
      <br/>
      Room AC is <strong>{ac? "On": "Off"}</strong>
      <br/>
      <button onClick={()=> setAC(!ac)} >Toggle AC</button>
    </div>
  );
}
 
export default Room;
