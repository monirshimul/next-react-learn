import React from 'react';
import Parent from '../mainSection/composition/Parent';
import Child from '../mainSection/composition/Child';
import ParentTwo from '../mainSection/composition/ParentTwo';

const Composition = () => {
    return (
        <Parent>
            {
                ({ parentToChild }) => 
                <ParentTwo>
                    {
                        ({ parentTwoToChild }) => <Child receiveFromParent={parentToChild} receiveFromParentTwo={parentTwoToChild} />
                    }
                </ParentTwo>
            }
        </Parent>
    )
}

export default Composition
