import React from 'react'
import Card from './Card'

const Person = (person)=>{
  const spec = person.species
  console.log(spec)
  return(
    <Card
      name = {person.name}
      species ={fetch(spec).then(response => response.json()).then(person=> person.name)}
    />
  )

}

export default Person;
