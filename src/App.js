import React from 'react';
import './App.css';

//JSX
let name =<span> React JS</span>;

//Common 
let newElement = React.createElement('h2',{className:"demo"},"This is demo text")

let demoFun = function(){
  alert("text")
}

let passFun = (marks) => {

  if(marks > 50){
    return "You are Pass";
  }else{
    return "You are Fail";

  }

} 

function App() {
  return (
    <div className="App">
        <p>
         Learn {name}
        </p>
        {newElement}
        <button click={demoFun}>Click ME</button><br></br>
        {passFun(10)}

    </div>
  );
}

export default App;
