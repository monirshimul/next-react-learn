import React, { Fragment } from 'react'

const ParentTwo = (props) => {

    const anotherFuncPassToChild = (func)=>{
        return func * 2
    }

    return (
        <Fragment>
        
            {props.children({parentTwoToChild : anotherFuncPassToChild})}
        
        </Fragment>
    )
}

export default ParentTwo
