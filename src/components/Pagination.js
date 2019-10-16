import React from 'react'
import PageNumberButton from './PageNumberButton.js'

const Pagination = (props) =>{
  console.log(props)
  //console.log(prop.onClick)
  //console.log(prop.currentPage, prop.maxPage)
  let arr = []
  let prop = props;
  for(var i = 0; i < prop.maxPage  ; i++){
    arr.push('')
  }
  //console.log(prop.onClickPage)
  const pageNumButtons = arr.map((page, i) =>{
    return(
      <PageNumberButton
        buttonId = {i}
        currentPage = {prop.currentPage}
        maxPage = {prop.maxPage}
        maxResPage = {prop.maxResPage}
        onClick = {prop.onClickPage}

      />
    )
  })


    return(
      <div class='bt b--light-silver flex justify-center items-center f3 ma3'>
        <nav class='ba b--light-silver br3 ma3 overflow-hidden'>
          {prop.currentPage !== 0 ?
            (<a class='link dim br b--light-silver pa3 fl' onClick = {prop.onClickPrev} href= '#'> Previous </a>)
            :(<a class='link dim br b--light-silver pa3 fl disabled silver' onClick= {prop.onClickPrev} href= '#'> Previous </a>)
          }

          {prop.currentPage !== prop.maxResPage-1 ?
            (<a class='link dim b--light-silver pa3 fr ' onClick = {prop.onClickNext} href= '#'> Next </a>)
            :(<a class='link dim b--light-silver pa3 fr disabled silver' onClick = {prop.onClickNext} href= '#'> Next </a>)
          }


          <div class='overflow-hidden center dt tc'>
            {pageNumButtons}
          </div>







        </nav>
      </div>

    )







}



export default Pagination
