import React, { Fragment } from 'react'

const Parent = (props) => {
    const funcPassToChild = (a , b)=>{
        return `Hello ${a} & ${b}, `
    }
    return (
        <Fragment>
            {props.children({parentToChild : funcPassToChild})}
        </Fragment>
    )
}

export default Parent
