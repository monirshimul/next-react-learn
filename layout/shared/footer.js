import React, { Fragment } from 'react'
import Link from 'next/link'
const footer = () => {
    return (
        <Fragment>
            <div className="container" >
                <footer className={`row d-flex justify-content-around align-items-center pt-5`} >
                    <div className="col-sm-3">
                        <p className="text-center" style={{ color: "#888", fontSize: "12px" }}>Copyright © 2021 <Link href="https://erainfotechbd.com/">ERA InfoTech Ltd.</Link></p>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center" style={{ color: "#888", fontSize: "12px" }}> Help Center  | Terms  |  Privacy Policy</p>
                    </div>


                    <div className=" col-sm-3 d-flex justify-content-center align-items-center" >
                        <img

                            src="/vercel.svg"
                            className="img-fluid"
                            width="20"
                            height="10"
                            alt="Picture"
                            style={{ position: "relative", top: "-6px" }}


                        />
                        <p className="text-center ml-2" style={{ color: "#888", fontSize: "12px" }}>Bangladesh</p>
                    </div>

                </footer>
            </div>
        </Fragment>
    )
}

export default footer
