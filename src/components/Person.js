import React from 'react';

function Person(props) {
  const {person} = props
  return ( <div>
      <h2>I am {props.person.firstname} {props.person.lastname}.  and I am {props.person.age}</h2>
  </div>)
}

export default Person;
