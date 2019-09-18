import {REQUEST_PEOPLE_PENDING,
        CHANGE_SEARCH_FIELD} from './constants.js';


export const setSearchfield = (text) =>{
    return{
      type:CHANGE_SEARCH_FIELD,
      payload:text
    }


}

export const requestPeople = (dispatch)=>{ //requests all star wars characters
  dispatch ({type:REQUEST_PEOPLE_PENDING});
  fetch("https://swapi.co/api/people").then(response => response.json()).then(data=>console.log(data))
}
