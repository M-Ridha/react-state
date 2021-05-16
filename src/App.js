import React from 'react' ;
import './App.css';
import Pic from "./image.jpg";

class App extends React.Component{
  constructor(person) {
    super(person);

    this.state={
      ppic:<img src={Pic} alt ='image'/> ,
      fullName:" M-Ridha Harhira ",
      profession:"A marine mechanic and a Fullstack Js Developer ",
      bio:"  I WILL EITHER FIND A WAY OR MAKE ONE ",
      show : false ,
      time :0
      

    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
      time: prevState.time + 1,
      }));
    }, 500);
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };


  render () {

      return (
        <div className="App">

          <button onClick={this.handleClick}> {this.state.show? 'hide profile' : ' show profile '} </button>
          {this.state.show? (

          this.state.show && (
        <>
          <div className="pic" > {this.state.ppic} </div> 
          <h1 style={{fontFamily:"cursive" }}> {this.state.fullName} </h1>  
          <h3 style={{fontFamily:"cursive" }}> {this.state.profession} </h3>  
          <h2 style={{fontFamily:"cursive" }}> {this.state.bio} </h2> 
        </> 
          ) ) :(
            <p >The last component was mounted since: {this.state.time} seconds</p>       
          ) }
          
          
        </div>
      );
  }
  
}



export default App;
