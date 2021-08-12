import React, { Fragment, useState } from 'react'

const AccordionForm = props => {

    const {dataPass} = props
    const [user, setUser] = useState({
        name:"",
        post:""
    })

    const handleChange = (e)=>{
        setUser({...user, [e.target.name] : e.target.value })
    }

    const onDataSubmit = ()=>{
        dataPass(user)
        setUser({
            name:"",
            post:""
        })

    }


    const {name, post} = user
    console.log(name, post)
    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="text-center">
                        <h5>User Form</h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-xs-12 col-sm-10 col-md-8">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        User Info
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        {/* input form */}
                                        
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                                <input type="text" value={name} name="name" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" className="form-text">Provide Your Name</div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Designation</label>
                                                <input type="text" value={post} name="post" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" className="form-text">Provide Your Designation</div>
                                            </div>
                                            
                                            <button onClick={onDataSubmit} className="btn btn-primary">Submit</button>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AccordionForm
