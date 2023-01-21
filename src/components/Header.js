import React from 'react';

// function Header(){
//     return <h1>Fuctinal Components</h1>
// }

export const Header=(props) =>{
    return(
        <div className="HD">
            <h1>Hello {props.name} {props.lname}</h1>
            {props.children}
        </div>
    )

}
    
  