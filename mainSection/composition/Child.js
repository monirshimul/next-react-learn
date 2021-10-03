import React from 'react'

const Child = ({receiveFromParent, receiveFromParentTwo}) => {
    //console.log("Child Props", props)
    return (
        <div>
            <h1>The Result from Parent To Child is : 
            {receiveFromParent ? receiveFromParentTwo(receiveFromParent(5,6)) : 0}
            </h1>
            
        </div>
    )
}

export default Child
