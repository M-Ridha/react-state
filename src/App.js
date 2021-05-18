import React from 'react' ;
import './App.css';
import Pic from "./image.jpg";
import Profile from './Profile';

class App extends React.Component{
  constructor(person) {
    super(person);

    this.state={
      ppic:<img src={Pic} alt ='myimage'/> ,
      fullName:" M-Ridha Harhira ",
      profession:"A marine mechanic and a Fullstack Js Developer ",
      bio:"  I WILL EITHER FIND A WAY OR MAKE ONE ",
      show : false ,
      time :0
      

    };
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
      
          {this.state.show &&   <Profile fullName={this.state.fullName} profession={this.state.profession} bio={this.state.bio}  ppic={this.state.ppic}/>}
       
        </div>
      );
  }
  
}



export default App;
