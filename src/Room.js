import React, {useState} from 'react';
import './Room.css'

function Room() {
let [isLit, setLit] = useState(true);
let [roomTemp, setRoomTemp] = useState(22);


  return (
    <div className={`room ${isLit? "lit": "dark"}`}>
      <strong>Control Room</strong>
      <br/>
      <br/>
      Room Light Status: <strong>{isLit? "On": "Off"}</strong>
      <br/>
      <button onClick={()=> setLit(true)} >On</button>
      <button onClick={()=> setLit(false)} >Off</button>
      <br/>
      <br/>
      Room Temprature Status: <strong>{roomTemp}</strong>
      <br/>
      <button onClick={()=> setRoomTemp(++roomTemp)} >+</button>
      <button onClick={()=> setRoomTemp(--roomTemp)}>-</button>
    </div>
  );
}
 
export default Room;
