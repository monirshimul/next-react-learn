import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Element from '../mainSection/Element';
import {UserAdd, UserDelete} from '../redux/slices/DynamicUserSlice'





const AddElement = () => {

    const user = useSelector((state)=>state.DynamicUser.user);
    console.log("USer", user)
    const dispatch = useDispatch();


    const addUser = (e)=>{
        dispatch(UserAdd())
    }

    const removeUser = (e)=>{
        dispatch(UserDelete())
    }


    return (
        <Fragment>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-sm-10" style={{ border: "1px dashed gray", paddingTop: "50px", paddingBottom: "50px" }}>
                        {
                            user.map((val, ind) => {
                                return <Element index={ind} key={ind}/>
                            })
                        }
                    </div>
                    <div className="col-sm-2 text-center" style={{ border: "1px dashed gray", paddingTop: "50px" }}>
                        <button onClick={addUser} className="btn btn-primary m-2">Add</button>
                        <button onClick={removeUser} className="btn btn-primary m-2">Delete</button>
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default AddElement
