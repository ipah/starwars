import Card from './Card';
import React from 'react';
import './main.css'


//card list --> Person -> Card


const CardList = ({people})=>{
 console.log({people})

  const cardComponent = people.map((user,i) =>{
  //  console.log(user[i] + '  ' + species[i])
    return(
      <Card
        key = {i}
        name = {user.name}
        species = {user.species}
        gender= {user.gender}
        weight= {user.weight}
        height={user.height}

      />
    )
  })
  return(
    <div class='grid-container pa4'> {cardComponent} </div>
  )
}


export default CardList
