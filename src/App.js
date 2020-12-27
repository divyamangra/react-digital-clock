import React,{useState} from "react";
import './App.css'



function App() {
  
let time = new Date().toLocaleTimeString();
const[newTime,setNewTime]=useState(time);

setInterval(()=>{
  time = new Date().toLocaleTimeString();
  setNewTime(time)
},1000)
  return (
    <div className='time'>
     {newTime}
    </div>
  );



}

export default App;
