import React from 'react'

const Pagination = (prop) =>{
  //console.log(prop.onClick)
  //console.log(prop.currentPage, prop.maxPage)

  console.log(prop.onClickPage)
  return(
    <div class='bt b--light-silver flex justify-center items-center f3 ma3'>
      <nav class='ba b--light-silver br3 ma3 overflow-hidden'>
        {prop.currentPage !== 0 ?
          (<a class='link dim br b--light-silver pa3 fl' onClick = {prop.onClickPrev} href= '#'> Previous </a>)
          :(<a class='link dim br b--light-silver pa3 fl disabled silver' onClick= {prop.onClickPrev} href= '#'> Previous </a>)
        }

        {prop.currentPage !== prop.maxPage-1 ?
          (<a class='link dim b--light-silver pa3 fr ' onClick = {prop.onClickNext} href= '#'> Next </a>)
          :(<a class='link dim b--light-silver pa3 fr disabled silver' onClick = {prop.onClickNext} href= '#'> Next </a>)
        }

        <div  class='dt tc'>
        {prop.currentPage+1 === 1 ?
          (<a data-page = "0" class='dtc br b--light-silver pa3 bg-blue' onClick = {prop.onClickPage} href= '#'> 1</a>)
          : (<a data-page = "0" class='dtc br b--light-silver pa3 ' onClick = {prop.onClickPage} href= '#'> 1</a>)
        }
        {prop.currentPage+1 === 2 ?
          (<a data-page = "1" class='dtc br b--light-silver pa3 bg-blue' onClick = {prop.onClickPage} href= '#'> 2</a>)
          : (<a data-page = "1" class='dtc br b--light-silver pa3 ' onClick = {prop.onClickPage} href= '#'> 2</a>)
        }
        {prop.currentPage+1 === 3 ?
          (<a data-page = "2" class='dtc br b--light-silver pa3 bg-blue' onClick = {prop.onClickPage} href= '#'> 3</a>)
          : (<a data-page = "2" class='dtc br b--light-silver pa3 ' onClick = {prop.onClickPage} href= '#'> 3</a>)
        }
        {prop.currentPage+1 === 4 ?
          (<a data-page = "3" class='dtc br b--light-silver pa3 bg-blue' onClick = {prop.onClickPage} href= '#'> 4</a>)
          : (<a data-page = "3" class='dtc br b--light-silver pa3 ' onClick = {prop.onClickPage} href= '#'> 4</a>)
        }
        {prop.currentPage+1 === 5 ?
          (<a data-page = "4" class='dtc br b--light-silver pa3 bg-blue' onClick = {prop.onClickPage} href= '#'> 5</a>)
          : (<a data-page = "4" class='dtc br b--light-silver pa3 ' onClick = {prop.onClickPage} href= '#'> 5</a>)
        }
        {prop.currentPage+1 === 6?
          (<a data-page = "5" class='dtc br b--light-silver pa3 bg-blue' onClick = {prop.onClickPage} href= '#'> 6</a>)
          : (<a data-page = "5" class='dtc br b--light-silver pa3 ' onClick = {prop.onClickPage} href= '#'> 6</a>)
        }


        </div>





      </nav>
    </div>




  )
}



export default Pagination
