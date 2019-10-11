import React from 'react'

const Pagination = (prop) =>{
  //console.log(prop.onClick)
  console.log(prop.currentPage, prop.maxPage)
  return(
    <div class='bt b--light-silver flex justify-center items-center f3 ma3'>
      <nav class='ba b--light-silver br3 ma3 overflow-hidden'>
        <a class='link dim br b--light-silver pa3 fl'> Previous </a>
        {prop.currentPage != prop.maxPage-1 &&

          <a class='link dim b--light-silver pa3 fr ' onClick = {prop.onClick}> Next </a>

        }
        {prop.currentPage == prop.maxPage-1 &&
          <a class='link dim b--light-silver pa3 fr disabled silver' onClick = {prop.onClick}> Next </a>
        }
        <div class='dt tc'>
          <a class='dtc br b--light-silver pa3'> 1</a>
          <a class='dtc br b--light-silver pa3'> 2</a>
          <a class='dtc br b--light-silver pa3'> 3</a>
        </div>





      </nav>
    </div>




  )
}



export default Pagination
