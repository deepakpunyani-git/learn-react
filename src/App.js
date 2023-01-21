import React from 'react';
import './App.css';
//Import constant
import {Header} from './components/Header';
import CHeaderNew from './components/CHeader';

class App extends React.Component{
  render(){
    return(
      <div className='Main'>
          <Header/>
          <CHeaderNew/>
      </div>
    );
  }
}

export default App;
