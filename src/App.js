import React from 'react';
import './App.css';
//Import constant
import {Header} from './components/Header';
import CHeaderNew from './components/CHeader';

class App extends React.Component{
  render(){
    return(
      <div className='Main'>
          <Header name="Aadi" lname="Arora" />
          <Header name="avi" lname="41534">
            <p>He is a doctor</p>
          </Header>
          <Header name="Mayur" >
            <a href="#">Click Me!!!</a>
          </Header>
          
          <CHeaderNew name="Aadi" lname="Arora">
          <p>HE Is An Engineer</p>
          </CHeaderNew>

          <CHeaderNew name="AVi" lname="41534"/>
      </div>
    );
  }
}

export default App;
