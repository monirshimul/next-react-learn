import React, { Fragment } from 'react'
import { useDrag, useDrop } from 'react-dnd';
const InputText = ({ id, name }) => {


    const [{ isDragging }, drag] = useDrag(() => ({
        type: "inputText",
        item: {
            id: id,
            flag: "inputText"
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
    return (
        <Fragment>
            <h5 ref={drag}>
                <span style={{ border: isDragging ? "2px dashed #fff" : "0px", cursor: isDragging ? "pointer" : "grabbing" }} className="badge rounded-pill bg-warning text-dark mx-2">{name}</span>
            </h5>
        </Fragment>
    )
}

export default InputText
