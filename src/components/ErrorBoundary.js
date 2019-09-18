import  React, {Component} from 'react';



class ErrorBoundary extends Component{
  constructor(props){
    super()
    this.state = {
      hasError :''
    }
  }


  componentDidCatch(error, info){
      console.log('ERROR')
    this.setState({hasError: true})
  }


  render(){
    if(this.state.hasError){

      return(
        <h1> Oh no, there appears to be an error! </h1>
      )

    }

    return(
      
      this.props.children
    )
  }
}

export default ErrorBoundary
