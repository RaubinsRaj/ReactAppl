import React from 'react';

function ChildComponent(props) {

   const {name, gfName} = props
  return (<div>
      <h1> {props.name} loves {props.gfName}</h1>
      <button onClick={()=>props.greetHandler('child')}> Greet Parent</button>
  </div>
  )}

export default ChildComponent;
