import React from 'react'

const name:string = 'Erik';
const age:number = 24;
const isActive: boolean = true;
const names:string[] = ["Pedro", "Juan", "Julio"];
const person = {
  age: 24,
  name: "Erik",
  address: {
    country: "Colombia",
    numberHouse: "22",
  },
};



export const BasicTypes = () => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isActive ? "Activo" : "No Activo"}</p>
      <p>
        <b>Lista: </b> {names.join(", ")}
      </p>
      <p>
        <b>Literal Object: </b> {JSON.stringify(person, null, 2)}
      </p>
    </div>
  );
};

