import React from 'react'
import './main.css'


const SearchBox = (searchField)=>{
  console.log(searchField.onChange)
  const change = searchField.onChange
  return(


        <input
          class = 'ba b--black-40 br4 h2 f3'
          onChange = {change}
        />


  )
}

export default SearchBox;
