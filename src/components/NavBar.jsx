import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg shadow-sm py-3"
            style={{
                backgroundColor: "#F5F2EB",
                borderBottom: "1px solid #D6D0C4"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-3"
                    to="/"
                    style={{
                        color: "#1C1C1C",
                        letterSpacing: "2px"
                    }}
                >
                    CAR<span style={{ color: "#8C7355" }}>ÉLITE</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link fw-semibold"
                                to="/"
                                style={{ color: "#333333" }}
                            >
                                HOME
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link fw-semibold"
                                to="/addcars"
                                style={{ color: "#333333" }}
                            >
                                ADD CARS
                            </Link>
                        </li>

                        <li className="nav-item mt-2 mt-lg-0">
                            <Link
                                className="btn px-4 py-2 fw-semibold"
                                to="/viewcars"
                                style={{color: "#333333",}}
                            >
                                VIEW CARS
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar