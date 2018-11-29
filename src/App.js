import React, { Component } from 'react';
import { BrowserRouter as Router,NavLink,Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

const Usefull=(params)=>{
return (
  <h1>welcome user {params.username}</h1>
)
}

class App extends Component {
  state={
  loggin:false
  }
  logginHandle=()=>{
    this.setState(prevState=>({
      loggin:!prevState.loggin
   } ))
  }
  render() {
    return (
      <Router>
        <div className="App">
                       <br/><br/>
                 <NavLink to="/" exact activeStyle={{color:'green'}}>First Link</NavLink><br/>
                 <NavLink to="/about" exact activeStyle={{color:'blue'}}>About</NavLink><br/>
                 <NavLink to="/user/peter" exact activeStyle={{color:'blue'}}>user peter</NavLink><br/>
                 <NavLink to="/user/sai" exact activeStyle={{color:'pink'}}>user sai</NavLink>

            <br/>
            <br/>
            <input type="button" value={this.state.loggin?'logout':'logIn'} onClick={this.logginHandle.bind(this)}/><br/>
            <Route path="/" exact strict render={()=>{ return (<h1>how r u raj</h1>);}}/>
            <Route path="/about" exact strict render={()=>{ return (<h1>how r u suresh</h1>);}}/>
            <Route path="/user/:username" exact strict render={({match})=>(this.state.logginHandle ? ( <Usefull username={match.params.username}/>) : (<Redirect to="/"/>)
               )}/>
         </div>

       </Router>
         
    );
  }

}
export default App;
