import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { UserDataUpdate } from '../redux/slices/DynamicUserSlice';


const Element = (props) => {

    console.log("props", props)

    const dispatch = useDispatch();
    const handleChange = (e)=>{
        dispatch(UserDataUpdate({
            index: props.index,
            name: e.target.name,
            value: e.target.value
        }))
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-8">
                    <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"  name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className ="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Element
