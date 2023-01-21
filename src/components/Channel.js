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
      return (
                <div className="dsfdf">
                    <h1>{this.state.msg}</h1>
                    <button onClick={() =>{ this.printM()  }}>Click ME</button>
                </div>

      )
    }

   
}

export default Channel