import React from 'react';
import Parent from '../mainSection/composition/Parent';
import Child from '../mainSection/composition/Child';

const Composition = () => {
    return (
        <Parent>
            {
                ({parentToChild})=> <Child receiveFromParent = {parentToChild}/>
            }
        </Parent>
    )
}

export default Composition
