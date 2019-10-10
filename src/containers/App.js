import logo from '../logo.svg';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary'
import {requestPeople} from "../actions";
import React, {Component} from "react";
import Pagination from "../components/Pagination";
import {getPeopleData, createSpeciesObject,apiCall,createPersonObject, createStateArrays} from './apiCall'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



class App extends Component{
  constructor(){
    super()
    this.state={
      people:[],
      search: '',
      species:[],
      page:1,
      maxPage:'',
      // species: [],
      // fullInfo:[],


    }

    //const never = ''
    // const getPeople =>user{
    //   this.setState({getPeople:user})
    // }
    // const setPeople=> (){
    //
    // }

  }
//---------APPROACH #2--------------//
  componentDidMount(){
    // this.getSpecies('https://swapi.co/api/species/?page=')
    // this.getPeople('https://swapi.co/api/people/?page=')

    this.getPeople('https://swapi.co/api/species/?page=','https://swapi.co/api/people/?page=')
  }

  getSpecies = async (link) =>{

    let mySpeciesArray = [] //array of
    // const getSpecies = await apiCall(link.concat('1')) //first 10 species
    // let maxPage = Math.ceil(getSpecies.count/10)
    // console.log(getSpecies)
    // for(var i = 0; i < getSpecies.length; i++){
    //   let temp = createSpeciesObject(getSpecies[i])
    //   mySpeciesArray.push(temp)
    // }



    // let counter = 'go';
    // let pageNum = 1
    // while(counter === 'go'){
    //   //console.log(link.concat(pageNum))
    //   const getSpecies = await apiCall(link.concat(pageNum))
    // //  console.log(getSpecies)
    //   const getSpecResults = getSpecies.results
    //   //console.log(getSpecResults)
    //
    // //  console.log(getSpecies.next)
    //   for(var i = 0; i < getSpecResults.length; i++){
    //     let temp = createSpeciesObject(getSpecResults[i])
    //     //console.log(temp)
    //     mySpeciesArray.push(temp)
    //   }
    //   if(getSpecies.next){
    //     pageNum++
    //   }
    //   else{
    //     counter = 'stop'
    //   }
    // }

    // for(var i = 1; i < maxPage; i++){
    //   let moreSpeciesApi = await apiCall(link.concat('/?page=').concat(i))
    //   let tmp = moreSpeciesApi.results
    //   for(var j = 0; j< tmp.length; j++){
    //     let temp = createSpeciesObject(getSpecies[i])
    //     mySpeciesArray.push(temp)
    //
    //   }
    // }
    console.log(mySpeciesArray)
    //this.setState({species: await createStateArray('species',link)})

  }

  getPeople = async (speciesLink, peopleLink) =>{
    // console.log(this)
    // const peopleObj = []
    // const obj = await apiCall(link)//gets all people
    //
    // const firstRes =  obj.results
    // for(var i = 0; i < firstRes.length; i++){
    //   //console.log(firstRes[i].name)
    //   peopleObj.push( createPersonObject(firstRes[i]))
    // }
    //
    // //console.log(link.concat('/?page=1'))
    // const maxPage = Math.ceil(obj.count/10)
    // //console.log(link.concat('/?page=').concat(maxPage))
    // for(var i = 2; i <=maxPage; i++){
    //   //console.log(i)
    //   //let link = 'https://swapi.co/api/people/?page='.concat(i)
    //   let morePeopleApi = await apiCall(link.concat('/?page=').concat(i))
    //   //console.log('api call made')
    //   let tmp = morePeopleApi.results
    //   //console.log('line 74')
    //   for(var j= 0; j < tmp.length; j++ ){
    //     // console.log('person')
    //     // console.log(tmp[j])
    //     let getSpecies = this.state.species
    //     console.log(getSpecies)
    //     let modifiedPerson = createPersonObject(tmp[j],getSpecies)
    //     // console.log('new person')
    //     // console.log(modifiedPerson)
    //     peopleObj.push(modifiedPerson)
    //   }
    // }
    // const tmpPpl = obj.results //actual array of people
    // console.log(obj)
    // for(var i = 0; i < tmpPpl.length; i++){
    //   //console.log(obj[i].name)
    //   const person = tmpPpl[i]
    //   const speciesObj = await apiCall(tmpPpl[i].species)
    //   const spec = speciesObj.name
    //   const weight_conv = person.mass * 2.205
    //   const weight_in_lbs = weight_conv.toFixed(1).toString().concat(' lbs')
    //   let m = {
    //     name:person.name,
    //     species: spec,
    //     gender: person.gender,
    //     height: person.height,
    //     weight: weight_in_lbs
    //   }
    //   peopleObj.push(m)
    // }
    let stateArrays = await createStateArrays(speciesLink, peopleLink)
    //console.log(stateArrays)

    let peopleArraySorted = stateArrays[1].sort((a,b) =>{
      return a.name > b.name ? 1:-1
    })

    let maxPageNum = Math.ceil(peopleArraySorted.length/10)
    this.setState({maxPage: maxPageNum})

    //console.log(test)
    this.setState({people:peopleArraySorted})
    //console.log(this.state)
  }

//THIS FUNCTION IS TO HANDLE ON CHANGE
  searchHandle = (event) =>{
      //console.log(event.target.value)
      this.setState({search: event.target.value})
  }

  //FUNCTION TO GRAB NEXT PAGE
  nextPage = (event) =>{
    let pageNum=this.state.page
    let newPageNum = pageNum++;
    if(newPageNum <= this.state.maxPageNum){
      this.setState({page: newPageNum })
    }

  }


//---------------------------------APPROACH #1-------------------------//
  // componentDidMount(){
  //   this.setRoot()
  //   //this.setSpecies()
  //
  // //  characters = []
  // //
  // // console.log(characters)
  // // // const speciesLinks = characters.map( (person) =>{
  // // //   return person.species
  // // // })
  // // //const species = getSpeciesData(characters)
  // // this.state.people = characters
  // //
  // // console.log(this.state.people.resolv)
  //
  // }
  //
  // setRoot = async () =>{
  //   // const arr1 = await getPeopleData('https://swapi.co/api/people/')
  //   // //console.log(arr1);
  //   // const species = []
  //   // for(var i =0; i < arr1.length; i++){
  //   //   species.push(arr1[i].species[0])
  //   // //  console.log(species)
  //   // //  console.log(i)
  //   // }
  //   // const  obj = await getSpeciesData(species)
  //   // console.log(arr1)
  //
  //   this.setState({people:await getPeopleData('https://swapi.co/api/people/')})
  //   console.log(this.state)
  //   const tmp = this.state.people
  //   console.log(tmp)
  //   const species = []
  //   for(var i =0; i < tmp.length; i++){
  //     species.push(tmp[i].species[0])
  //   //  console.log(species)
  //   //  console.log(i)
  //   }
  //   console.log(species)
  //   this.setState({species: await getSpeciesData(species)})
  //   console.log(this.state)
  //   this.setSpecies()
  // }
  //
  //
  // setSpecies =  ()=>{
  //   const people = this.state.people
  //   const species = this.state.species
  //   console.log(species)
  //   for(var i = 0; i < people.length; i++){
  //     //console.log(species[i])
  //     people[i].species = species[i]
  //   }
  //   this.setState({fullInfo: people})
  // //  console.log(people)
  //
  // }




  render(){


    //const {fullInfo}= this.state
    const {people, search,species,page} = this.state
    //console.log(pageNumber)
    //CREATES AN ARRAY OF PEOPLE THAT INCLUDE THE FILTERED TEXT
    const filtered = people.filter( person =>{
      return person.name.toLowerCase().includes(search.toLowerCase())
    }).slice(0,page*10)

    console.log(filtered)
    console.log({people})
    console.log({species})

    //   const b = {...people, ...species}
    //   console.log(b)
    //console.log("render 104 " +this.state.people)
    if(people.length >0){
      return(
        <div class=''>
          <nav class="flex justify-between bb b--black-10 bg-blue">
          <a class="link white-70 hover-white no-underline flex items-center pa3" href="">
            <svg
              class="dib h1 w1"
              data-icon="grid"
              viewBox="0 0 32 32"
              style={{fill:"black"}}
              >
              <title>Super Normal Icon Mark</title>
              <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
              </path>
            </svg>
          </a>
          <div class="flex-grow pa3 flex items-center">
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">People</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Species</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Planets</a>
          </div>
        </nav>
        <div class='w-100 sw-bg '>
          <div class='flex justify-center ma3'>
            <SearchBox onChange = {this.searchHandle} />
          </div>
          <ErrorBoundary>
            <CardList people = {filtered} />
          </ErrorBoundary>
        </div>
        <Pagination />
      </div>
        // <Card
        //   name = {people.name}
        //   height = {people.height}
        //   hair = {people.hair_color}
        // />
      );

    }


    return(
      <div class='h-100'>
        <nav class="flex justify-between bb b--black-10 bg-blue">
          <a class="link white-70 hover-white no-underline flex items-center pa3" href="">
            <svg
              class="dib h1 w1"
              data-icon="grid"
              viewBox="0 0 32 32"
              style={{fill:"black"}}
              >
              <title>Super Normal Icon Mark</title>
              <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
              </path>
            </svg>
          </a>
          <div class="flex-grow pa3 flex items-center">
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">People</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Species</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Planets</a>

          </div>
        </nav>
        <ErrorBoundary>
          <div class='flex justify-center items-center h-100'>
            <img src="https://i.imgur.com/KF2MyHt.gif" />
          </div>
        </ErrorBoundary>
      </div>

    )

  }
}

export default App;
