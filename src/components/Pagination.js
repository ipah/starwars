import React from 'react'

const Pagination = (prop) =>{
  //console.log(prop.onClick)
  console.log(prop.currentPage, prop.maxPage)
  return(
    <div class='bt b--light-silver flex justify-center items-center f3 ma3'>
      <nav class='ba b--light-silver br3 ma3 overflow-hidden'>
        {prop.currentPage != 0 &&
          <a class='link dim br b--light-silver pa3 fl' onClick = {prop.onClickPrev}> Previous </a>
        }
        {prop.currentPage == 0 &&
          <a class='link dim br b--light-silver pa3 fl disabled silver' onClick= {prop.onClickPrev}> Previous </a>
        }
        {prop.currentPage != prop.maxPage-1 &&

          <a class='link dim b--light-silver pa3 fr ' onClick = {prop.onClickNext}> Next </a>

        }
        {prop.currentPage == prop.maxPage-1 &&
          <a class='link dim b--light-silver pa3 fr disabled silver' onClick = {prop.onClickNext}> Next </a>
        }
        <div class='dt tc'>
        {prop.currentPage+1 ==1 ?
          (<a class='dtc br b--light-silver pa3 bg-blue'> 1</a>)
          : (<a class='dtc br b--light-silver pa3 '> 1</a>)
        }
        {prop.currentPage+1 ==2 ?
          (<a class='dtc br b--light-silver pa3 bg-blue'> 2</a>)
          : (<a class='dtc br b--light-silver pa3 '> 2</a>)
        }
        {prop.currentPage+1 ==3 ?
          (<a class='dtc br b--light-silver pa3 bg-blue'> 3</a>)
          : (<a class='dtc br b--light-silver pa3 '> 3</a>)
        }
        {prop.currentPage+1 ==4 ?
          (<a class='dtc br b--light-silver pa3 bg-blue'> 4</a>)
          : (<a class='dtc br b--light-silver pa3 '> 4</a>)
        }
        {prop.currentPage+1 ==5 ?
          (<a class='dtc br b--light-silver pa3 bg-blue'> 5</a>)
          : (<a class='dtc br b--light-silver pa3 '> 5</a>)
        }
        {prop.currentPage+1 ==6?
          (<a class='dtc br b--light-silver pa3 bg-blue'> 6</a>)
          : (<a class='dtc br b--light-silver pa3 '> 6</a>)
        }

        
        </div>





      </nav>
    </div>




  )
}



export default Pagination
