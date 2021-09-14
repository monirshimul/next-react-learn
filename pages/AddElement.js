import React, { Fragment, useState } from 'react';
import Element from '../mainSection/Element';

const AddElement = () => {

    const [elArr, setElArr] = useState([<Element />])

    const addEle = ()=>{
        console.log("new Array", elArr)
        setElArr([
            ...elArr,
            <Element/>
        ])
    }

    const remove = ()=>{

        const newArr = [...elArr]
        
        newArr.pop()
        
        setElArr([...newArr]);
            


    }


    return (
        <Fragment>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-sm-10" style={{border:"1px dashed gray", paddingTop:"50px", paddingBottom:"50px"}}>
                        {
                            elArr.map((val, ind) => (
                                <>
                                    {val}

                                </>
                            ))
                        }
                    </div>
                    <div className="col-sm-2 text-center" style={{border:"1px dashed gray", paddingTop:"50px"}}>
                    <button onClick={addEle} className="btn btn-primary mb-2">Add More</button>
                    <button onClick={remove} className="btn btn-primary">Delete</button>
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default AddElement
