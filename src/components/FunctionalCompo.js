import React from 'react'
import PropTypes from 'prop-types'

function FunctionalCompo(props) {

    function msgPrint(){
        console.log(" Event Handling  ");
    }

  return (
    // <div><button onClick={msgPrint()}>Click Me</button></div>
    <div><button onClick={msgPrint}>Click Me</button></div>

  )
}

export default FunctionalCompo
