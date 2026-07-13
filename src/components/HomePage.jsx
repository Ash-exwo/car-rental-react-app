import React from 'react'
import NavBar from './NavBar'

const HomePage = () => {
  return (
    <div
            style={{
                backgroundColor: "#F5F2EB",
                minHeight: "100vh"
            }}
        >
            <NavBar />

            <div className="container">
                <div
                    className="d-flex justify-content-center align-items-center text-center"
                    style={{ minHeight: "80vh" }}
                >
                    <div>
                        <h1
                            className="display-3 fw-bold mb-3"
                            style={{
                                color: "#1C1C1C",
                                letterSpacing: "3px"
                            }}
                        >
                            CAR<span style={{ color: "#8C7355" }}>ÉLITE</span>
                        </h1>

                        <h4
                            className="fw-normal mb-3"
                            style={{ color: "#333333" }}
                        >
                            Welcome to CarÉlite
                        </h4>

                        <p
                            className="fs-5 mx-auto"
                            style={{
                                color: "#6C6C6C",
                                maxWidth: "600px"
                            }}
                        >
                            Manage your car collection with ease. Add new cars,
                            explore available vehicles, and keep all your car
                            details organized in one place.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomePage