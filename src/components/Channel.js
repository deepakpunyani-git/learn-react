import React from 'react';
class Channel extends React.Component{
    constructor(){
      super();
      this.state = {
        msg:" Learning Point "
      }
    }

    printM = () => {
      //alert("this id msg")
      this.setState({
        msg:" Learning Point  -- Done"
      })
    }

    render(){
      
      const numbs=[0,2,3,4,6,9]
      const pNums = numbs.map(function(num){
        return <li>{num}</li>
      })

      return (
                <>
                    <h1>{this.state.msg}</h1>
                    <ul>{pNums}</ul>
                    <button onClick={() =>{ this.printM()  }}>Click ME</button>
                </>

      )
    }

   
}

export default Channel