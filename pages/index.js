import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState } from 'react';
import Common from '../layout/common';
import Card  from '../mainSection/card'


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
      image: "mehedi.jfif",
      post: "ASE"

    }
  ])


  return (
    <Common>
      <Fragment>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            {
              user.map(value=>(
                <Card
                  key={value.id}
                  name={value.name}
                  image={value.image}
                  post={value.post}
                />
              ))
            }
          </div>
        </div>
      </Fragment>
    </Common>
  )
}
