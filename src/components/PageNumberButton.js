import React from 'react';
import './main.css'


const PageNumberButton = (props) =>{
  let pageProps = {props}
  console.log(pageProps)
  return(
    <a
    data-page = {pageProps.props.buttonId.toString()}
    onClick = {pageProps.props.onClick}
    class = {pageProps.props.maxResPage-1< pageProps.props.buttonId ?
            'dtc pa3 pa3-l pa2-m pa1 br b--light-silver silver disabled'
            : pageProps.props.currentPage === pageProps.props.buttonId ?
            'dtc br b--light-silver pa3-l pa2-m pa1 bg-blue white'
            :
            'dtc pa3-l pa2-m pa1 br b--light-silver'  }
    >
      {pageProps.props.buttonId +1 }
    </a>
  )




}





export default PageNumberButton;
// {pageProps.props.maxPage -1 < pageProps.props.buttonId ?
//   (<a data-page = {pageProps.props.buttonIdtoString()} class='dtc disabled br b--light-silver pa3 ' onClick = {pageProps.props.onClick} href= '#'> {pageProps.props.buttonId + 1}</a>)
//   :
//   ({ pageProps.props.currentPage === pageProps.props.buttonId ?
//     (<a data-page = {pageProps.props.buttonId.toString()} class='dtc br b--light-silver pa3 bg-blue' onClick = {pageProps.props.onClick} href= '#'> {pageProps.props.buttonId}</a>)
//     : (<a data-page = {pageProps.props.buttonId.toString()} class='dtc br b--light-silver pa3 ' onClick = {pageProps.props.onClick} href= '#'> {pageProps.props.buttonId}</</a>)}
//   )
//
//
// }


// <div class ='dtc pa3 br b--light-silver'>
// {
//   pageProps.props.maxResPage-1< pageProps.props.buttonId ?
//   <a data-page = {pageProps.props.buttonId.toString()} class=' disabled link  h-100 w-100 ' onClick = {pageProps.props.onClick} href= '#'> {pageProps.props.buttonId + 1}</a>
//   : pageProps.props.currentPage === pageProps.props.buttonId ?
//   <a data-page = {pageProps.props.buttonId.toString()} class='  bg-blue white link h-100 w-100' onClick = {pageProps.props.onClick} href= '#'> {pageProps.props.buttonId+ 1}</a>
//    : <a data-page = {pageProps.props.buttonId.toString()} class='h-100 black link w-100  ' onClick = {pageProps.props.onClick} href= '#'> {pageProps.props.buttonId+ 1}</a>
// }
//
//
// </div>
//
//
// <a
// class = "dtc pa3 br b--light-silver {pageProps.props.maxResPage-1< pageProps.props.buttonId ? 'disabled': ''} link"
//
// >
//
// </a>
