import React, { Fragment } from 'react'
import Link from 'next/link'

const navBar = () => {
    return (
        <Fragment>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a
                        className="navbar-brand"
                        href="#"
                        style={{
                            fontSize: "30px",
                            color: "#02475e",
                            fontFamily: "'Rubik', sans-serif",
                        }}
                    >
                        {/* <Image
                            src="/vercel.svg"
                            className={`img-fluid`}
                            width="60"
                            height="40"
                            alt="Picture"
                        /> */}
                        <span style={{ fontSize: "30px", color: "#FF7600", borderBottom: "1px solid #707070", borderTop: "1px solid #FF7600" }}>V</span>ision
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link href="/">
                                <a
                                    className="nav-link mr-2"
                                    href="#"
                                    style={{
                                        fontSize: "12px",
                                        color: "#02475e",
                                        letterSpacing: "1px",
                                        fontFamily: "'Rubik', sans-serif",
                                    }}
                                >
                                    Home
                                </a>
                            </Link>
                            <Link href="/">
                                <a
                                    className="nav-link mr-2"

                                    style={{
                                        fontSize: "12px",
                                        color: "#02475e",
                                        letterSpacing: "1px",
                                        fontFamily: "'Rubik', sans-serif",
                                    }}
                                >
                                    Features
                                </a>
                            </Link>
                            <Link href="/">
                                <a
                                    className="nav-link mr-2"

                                    style={{
                                        fontSize: "12px",
                                        color: "#02475e",
                                        letterSpacing: "1px",
                                        fontFamily: "'Rubik', sans-serif",
                                    }}
                                >
                                    Features
                                </a>
                            </Link>


                            {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                        </div>

                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default navBar
