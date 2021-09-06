import React, { Fragment } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const dragDrop = () => {

    const dragEnd = (res) => {
        console.log("Res", res)
    }
    return (
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

                                    </div>

                                    {payload.placeholder}
                                </div>
                            )
                        }

                    </Droppable>
                </DragDropContext>
            </div>

        </Fragment>
    )
}

export default dragDrop
