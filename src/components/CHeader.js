import React from 'react';
class CHeader extends React.Component{
    render(){
      return (
                <div className="dsfdf">
                    <h1>Hello class Component {this.props.name} {this.props.lname}</h1>
                    {this.props.children}
                </div>

      )
    }
}

export default CHeader