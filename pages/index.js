import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState } from 'react';
import Common from '../layout/common';
import Card from '../mainSection/card';
import AccordionForm from '../mainSection/accordionForm'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


export default function Home() {

  const [user, setUser] = useState([
    {
      id: 1,
      name: "Md. Monirul Islam",
      image: "/monir.png",
      post: "ASE"
    },
    {

      id: 2,
      name: "Nahid Chowdhury",
      image: "/nahid.png",
      post: "JSE"

    },
    {

      id: 3,
      name: "Mehedi Hasan",
      image: "/mehedi.jfif",
      post: "ASE"

    }
  ])


  const dataPass = (data) => {
    const shape = {
      id: user[user.length - 1]["id"] + 1,
      name: data.name,
      image: "/eraLogo.png",
      post: data.post
    }

    setUser([...user, shape])
  }

  console.log("USer", user)

  const dragEnd = (res) => {
    console.log("res", res)
    const usersArray = [...user]
    const [orderUsers] = usersArray.splice(res.source.index, 1)
    usersArray.splice(res.destination.index, 0, orderUsers);

    setUser(usersArray);
  }



  return (
    <Common>
      <Fragment>
        <div className="container mt-5">
          <DragDropContext
            onDragEnd={dragEnd}
          >
            <Droppable
              droppableId="someId"
              direction="horizontal"
              type="column"
            >
              {
                (provided) => (
                  <div
                    className="row d-flex justify-content-center"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {
                      user.map((value, ind) => (
                        <Draggable
                          draggableId={`draggableId-${ind}`}
                          index={ind}
                          key={`draggableKey-${ind}`}
                        >
                          {
                            (provided) => (
                              <div
                                className={`card col-sm-4 p-3`}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <Card
                                  key={value.id}
                                  name={value.name}
                                  image={value.image}
                                  post={value.post}
                                />
                              </div>
                            )
                          }

                        </Draggable>
                      ))
                    }
                    {provided.placeholder}
                  </div>
                )
              }

            </Droppable>
          </DragDropContext>
          <AccordionForm dataPass={dataPass} />
        </div>
      </Fragment>
    </Common>
  )
}
