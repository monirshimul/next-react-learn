import React from 'react'

const Child = ({receiveFromParent, receiveFromParentTwo}) => {
    //console.log("Child Props", props)
    return (
        <div>
            <h1> 
            {receiveFromParent ? receiveFromParentTwo(receiveFromParent("Nahid", "Mehedi")) : 0}
            </h1>
            
        </div>
    )
}

export default Child
