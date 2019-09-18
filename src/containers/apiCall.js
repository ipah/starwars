import React from 'react'


export const apiCall = async (link) =>{
  const fetchResponse = await fetch(link)
  const getObject = await fetchResponse.json()
  return getObject
}

export const createPersonObject =   (person,speciesList) =>{
  //console.log(person.species)
  // let spec = 'none'
  // if(person.species.length != 0){
  //   const speciesObj = await apiCall(person.species)
  //   spec = speciesObj.name
  // }

  let specLink = person.species[0] //get link present in person object
  console.log(specLink)
  console.log(speciesList)
  let speciesName = 'unknown'



  for(var i=0; i < speciesList.length; i++){
    if(specLink === speciesList[i].link && specLink !== null){
      speciesName = speciesList[i].species
    }
  }

  let weight_in_lbs = person.mass
  if(person.mass != 'unknown'){
    const weight_conv = person.mass * 2.205
     weight_in_lbs = weight_conv.toFixed(1).toString().concat(' lbs')
  }



    let modifiedPerson = {
      name:person.name,
      species: speciesName,
      gender: person.gender,
      height: person.height,
      weight: weight_in_lbs
    }
  //  console.log(modifiedPerson)
    return modifiedPerson
}


export const createSpeciesObject = (species) =>{
  let temp = {
    species: species.name,
    link: species.url,
  }
  return temp
}

export const createObjArrays = async (type,link,speciesList) =>{
  let counter = 'go';
  let pageNum = 1
  let temp = []
  let array = []
  while(counter === 'go'){
    //console.log(link.concat(pageNum))
    const getJSONObj = await apiCall(link.concat(pageNum))
  //  console.log(getSpecies)
    const getResults = getJSONObj.results
    //console.log(getSpecResults)

  //  console.log(getSpecies.next)
    for(var i = 0; i < getResults.length; i++){
      if(type === 'species'){

        temp = await createSpeciesObject(getResults[i])
      //  console.log(temp)
      }
      if(type === 'people'){
        console.log('MAKING PPL')
        temp = await createPersonObject(getResults[i],speciesList)
      }

      //console.log(temp)
      array.push(temp)
    }
    if(getJSONObj.next){
      pageNum++
    }
    else{
      counter = 'stop'
    }
  }

  return array
}
export const createStateArrays = async (speciesLink, personLink) =>{
//  console.log(this.state)
  let speciesArray = await createObjArrays('species', speciesLink)
  let peopleArray = await createObjArrays('people',personLink, speciesArray)

  let arr = []
  arr.push(speciesArray)
  arr.push(peopleArray)


  return arr

//
//
//   //////////////////////////////////////////
//   let temp = []
//   let counter = 'go';
//   let pageNum = 1
//
//   while(counter === 'go'){
//     //console.log(link.concat(pageNum))
//     const getJSONObj = await apiCall(link.concat(pageNum))
//   //  console.log(getSpecies)
//     const getResults = getJSONObj.results
//     //console.log(getSpecResults)
//
//   //  console.log(getSpecies.next)
//     for(var i = 0; i < getResults.length; i++){
//       if(type === 'species'){
//
//         temp = await createSpeciesObject(getResults[i])
//       //  console.log(temp)
//       }
//       if(type === 'people'){
//         console.log('MAKING PPL')
//         temp = await createPersonObject(getResults[i],speciesList)
//       }
//
//       //console.log(temp)
//       array.push(temp)
//     }
//     if(getJSONObj.next){
//       pageNum++
//     }
//     else{
//       counter = 'stop'
//     }
//   }
// /////////////////////////////////
//   return array
}





// export const getPeopleData = async (link) =>{
//   console.log(link)
//   const object = await apiCall(link)
// //  console.log(object)
//   const arr = []
//   const arr1 = arr.concat(object.results)
// //  console.log(arr1)
//   return arr1
// }
//
// export const getSpeciesData = async (links) =>{
//   const speciesObject= []
//   for(var i =0; i<links.length;i++){
//     //console.log(i)
//     const obj = await apiCall(links[i])
//     speciesObject.push(obj.name)
//   }
//   console.log(speciesObject)
//   return speciesObject
//
// }
//
// export const getSpeciesLinks = (people) =>{
//   const links = people.map((person)=>{
//     return person.species
//   })
//   return links
// }
