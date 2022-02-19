import React from 'react';
import Person from './Person';

function NameList() {
    const names = ["Raubins", "Raj", "Ankita","Aswal","Raubins"]
    const persons= [
        {firstname: "Raubins",
         lastname: "Raj",
         age:24
        },
        {firstname: "Ankita",
         lastname:"Aswal",
         age: 14
        },
        {firstname:"john",
         lastname:"Wilson",
         age: 31
        },
        {firstname:"Judd",
         lastname:"Trump",
         age:34
        }
      ];

    const nameList= names.map((name,index)=><h2 key={index}>{name}</h2>)
    const personList= persons.map(person=> (<Person key= {person.age} person={person}/>))
  return <div>
    {nameList}
      {personList}
  </div>
}

export default NameList;
