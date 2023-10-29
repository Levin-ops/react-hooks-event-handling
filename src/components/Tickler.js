import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }
  return <button onClick={tickle}>Tickle Me</button>
  // return <button onClick={()=>console.log('I am Laughing')}>Tickle me!</button>;
}

export default Tickler;
