import React from 'react';
import './main.css'


const Card = (prop)=>{
 //console.log(prop)
   //const species = prop.species;


  // console.log(test);
  return(
  

//pa2 center bg-white pa4-ns mv3 ba b--black-10
    //<div class='fl w-100 w-25-ns pa2'>
      <article class=" ba b--black-10 pa4 bg-white ">
        <div class="tc">
          <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
          <h1 class="f3 ">{prop.name}</h1>
          <hr class="mw3 bb bw1 b--black-10"/>
        </div>
        <div class='tl'>
          <p class="lh-copy measure center f5 black-70">
            <span class='b'>Species:</span>  {prop.species}
          </p>
          <p class="lh-copy measure center f5 black-70">
            <span class='b'>Gender:</span>   {prop.gender}
          </p>
          <p class="lh-copy measure center f5 black-70">
            <span class='b'>Weight:</span>   {prop.weight}
          </p>
          <p class="lh-copy measure center f5 black-70">
            <span class='b'>Height:</span>   {prop.height}
          </p>
        </div>
      </article>
  //  </div>




  )


}

export default Card;
// import React from 'react';
//
// const Card = (prop)=>{
//   return(
//
//     <div className = 'bg-light-green dib br3 pa3 ma3 grow shadow-5'>
//       <img alt='robot' src={`https://robohash.org/${prop.id}?200x200`}/>
//       <div className='tc'>
//         <h2>{prop.name}</h2>
//         <p>{prop.email}</p>
//       </div>
//     </div>
//   );
// }
//
// export default Card;
