import React, { Component } from 'react'

export class CFunctionalCompo extends Component {

    constructor(props){
        super(props)
        this.msgPrint2 = this.msgPrint2.bind(this)
        this.state = {
            name:'Ravi',
            roll:this.props.roll
        }
    }

    msgPrint2(){
        console.log(" Event Handling  Press",this.state.roll);
        }

    msgPrintNew =() =>{
        this.setState({
            name:'Avi',
            roll:26
        })
        console.log(" Event Handling  Press",this.state.name,this.state.roll);
    }
    

  render() {
    return (
        <div>    <button onClick={this.msgPrint2}>PRess ME 2</button>    
        <button onClick={this.msgPrintNew}>PRess ME New</button>   </div>
 

    )
  }

 
}

export default CFunctionalCompo