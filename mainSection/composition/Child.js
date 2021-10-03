import React from 'react'

const Child = ({receiveFromParent}) => {
    //console.log("Child Props", props)
    return (
        <div>
            {receiveFromParent ? receiveFromParent(5,6) : 0}
        </div>
    )
}

export default Child
