import React, { Fragment, useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrag, useDrop } from 'react-dnd';
import InputText from '../mainSection/inputText';
import { FcServices } from "react-icons/fc";

const inputList = [
    {
        id: 1,
        name: "Input Text"
    },
    {
        id: 2,
        name: "Checkbox"
    },
    {
        id: 3,
        name: "Radio"
    },

]

const ReactDnd = () => {

    const [board, setBoard] = useState([])
    const [uniqueId, setUniqueId] = useState(0)
    const [inputTextFlag, setInputTextFlag] = useState(false)

    const [inputText, setInputText] = useState({
        label: "",
        placeholder: ""
    })
    const [mainInput, setMainInput] = useState({
        mainInputText: ""
    })



    const [{ isOver }, drop] = useDrop(() => ({
        accept: "inputText",
        drop: (item) => addElementToBoard(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const inputTextChange = (e) => {
        setMainInput({ ...mainInput, [e.target.name]: e.target.value })
    }

    const handleChange = (e) => {
        setInputText({ ...inputText, [e.target.name]: e.target.value })
    }

    const addElementToBoard = (items) => {
        console.log("Id", items)
        const itemList = inputList.filter((item) => items.id === item.id)
        setBoard((board) => [...board, itemList[0]])
    }

    const changeId = (id) => {
        setUniqueId(id)
    }


    const { label, placeholder } = inputText
    const { mainInputText } = mainInput

    const flagChange = () => {

        if (label !== "") {
            setInputTextFlag(!inputTextFlag)
        }
    }

    console.log("Modal Input", inputTextFlag)





    return (

        <Fragment>
            <div className="container-fluid">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-2" style={{ border: "1px solid #9D9D9D", height: "100vh", background: "#707070" }}>
                        <h5 className="text-center" style={{ padding: "10px 5px 0px 5px", fontSize: "14px", color: "#EFEFEF" }}>Choose your options</h5>
                        <hr />
                        <div className="d-flex flex-wrap">

                            {
                                inputList.map(v => (
                                    <>
                                        <InputText id={v.id} name={v.name} />
                                        <hr />
                                    </>


                                ))
                            }






                        </div>
                    </div>

                    <div ref={drop} className="col-md-10" style={{ background: "#F7F6F2", height: "100vh" }}

                    >
                        <h1 style={{ color: "#7F7C82" }}>Right Side</h1>
                        <hr />

                        {
                            board.map(v => (
                                <div className="d-flex align-items-center">
                                    {
                                        inputTextFlag ? (
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
                                                <input name="mainInputText" value={mainInputText} onChange={inputTextChange} placeholder={placeholder ? placeholder : ""} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                        ) : (
                                            <InputText id={v.id} name={v.name} />
                                        )
                                    }
                                    <div className="">
                                        <FcServices onClick={() => changeId(v.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ cursor: "pointer", margin: inputTextFlag ? "15px 0px 0px 20px" : "-10px 0px 0px 20px" }} />
                                    </div>

                                </div>
                            ))
                        }

                        {/* <div className="row d-flex justify-content-center align-items-end">
                            <div className="col-sm-6">


                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />




                            </div>
                            <div className="col-sm-2">
                                <button className={`btn btn-info `} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                            </div>

                        </div> */}

                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Provide Properties</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {
                                        uniqueId === 1 ? (
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
                                        ) : ""
                                    }

                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={flagChange} className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </Fragment>

    )
}

export default ReactDnd
