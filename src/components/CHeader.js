import React,{Fragment} from 'react';
class CHeader extends React.Component{
    render(){
      return (
                <Fragment>
                    <h1>Hello class Component {this.props.name} {this.props.lname}</h1>
                    {this.props.children}
                </Fragment>

      )
    }
}

export default CHeader