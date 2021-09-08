import React, { Fragment, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import styles from './dragDrop.module.css';
import NoSSR from 'react-no-ssr';

const DragDrop = () => {

    const [place, setPlace] = useState([])
    const [inputText, setInputText] = useState({
        label: "",
        placeholder: ""
    })
    const [mainInput, setMainInput] = useState({
        mainInputText: ""
    })

    const inputTextChange = (e) => {
        setMainInput({ ...mainInput, [e.target.name]: e.target.value })
    }

    const handleChange = (e) => {
        setInputText({ ...inputText, [e.target.name]: e.target.value })
    }


    const dragEnd = (res) => {
        console.log("Res", res)
        const placeArray = [...place]
        placeArray.push(res.source.index)
        setPlace(placeArray)
    }

    const { label, placeholder } = inputText
    const { mainInputText } = mainInput
    return (
        <NoSSR>
            <Fragment>
                <div className="container-fluid">
                    <DragDropContext
                        onDragEnd={dragEnd}
                    >
                        <Droppable
                            droppableId="someId"
                            direction="horizontal"
                            type="column"
                        >
                            {
                                (payload) => (
                                    <div className="row d-flex justify-content-between"
                                        {...payload.droppableProps}
                                        ref={payload.innerRef}
                                    >
                                        <div className="col-md-2" style={{ border: "1px solid #9D9D9D", height: "100vh", background: "#707070" }}>
                                            <h5 className="text-center" style={{ padding: "10px 5px 0px 5px", fontSize: "14px", color: "#EFEFEF" }}>Choose your options</h5>
                                            <hr />
                                            <div className="d-flex">

                                                <Draggable
                                                    draggableId="inputIdOne"
                                                    index={1}

                                                >
                                                    {
                                                        (payload) => (
                                                            <h5
                                                                {...payload.draggableProps}
                                                                {...payload.dragHandleProps}
                                                                ref={payload.innerRef}
                                                            >
                                                                <span className="badge rounded-pill bg-warning text-dark mx-2">Input Text</span>
                                                            </h5>
                                                        )
                                                    }

                                                </Draggable>
                                                <h5>
                                                    <span className="badge rounded-pill bg-warning text-dark">CheckBox</span>
                                                </h5>


                                            </div>
                                        </div>

                                        <div className="col-md-10" style={{ background: "#F7F6F2", height: "100vh" }}

                                        >
                                            <h1 style={{ color: "#7F7C82" }}>Right Side</h1>
                                            {
                                                place[0] === 1 ? (
                                                    <div className="row d-flex justify-content-center align-items-end">
                                                        <div className="col-sm-6">
                                                            {
                                                                label ? (
                                                                    <label htmlFor="exampleFormControlInput1" className="form-label">{label}</label>
                                                                )
                                                                    : ""
                                                            }
                                                            {
                                                                label && placeholder ?
                                                                    (
                                                                        <input type="text" name="mainInputText" value={mainInputText} onChange={inputTextChange} className="form-control" id="exampleInputEmail1" placeholder={placeholder ? placeholder : ""} aria-describedby="emailHelp" />
                                                                    )
                                                                    :
                                                                    (
                                                                        <input type="text" disabled className="form-control" id="exampleInputEmail1" placeholder={placeholder ? placeholder : ""} aria-describedby="emailHelp" />
                                                                    )
                                                            }

                                                        </div>
                                                        <div className="col-sm-2">
                                                            <button className={`btn btn-info ${styles.editBtn}`} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                                        </div>

                                                    </div>
                                                ) : ""
                                            }





                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Provide Properties</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form>
                                                                <div className="mb-3">
                                                                    <label htmlFor="exampleInputEmail1" className="form-label">Label Name</label>
                                                                    <input name="label" value={label} onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="exampleInputPassword1" className="form-label">Place Holder Name</label>
                                                                    <input name="placeholder" value={placeholder} onChange={handleChange} type="text" className="form-control" id="exampleInputPassword1" />
                                                                </div>

                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        {payload.placeholder}
                                    </div>
                                )
                            }

                        </Droppable>
                    </DragDropContext>
                </div>

            </Fragment>
        </NoSSR>
    )
}

export default DragDrop
