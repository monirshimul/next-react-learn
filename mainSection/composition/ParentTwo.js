import React, { Fragment } from 'react'

const ParentTwo = (props) => {
    console.log("Mother Func", props)

    const anotherFuncPassToChild = (func)=>{
        return `${func} Let's build a App Together.`
    }

    return (
        <Fragment>
        
            {props.children({parentTwoToChild : anotherFuncPassToChild})}
        
        </Fragment>
    )
}

export default ParentTwo
