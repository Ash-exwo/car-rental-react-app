import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewCar = () => {

    const [data, changeData] = useState([])

    const fetchCarData = () => {
        axios.get("https://host-demo-app.onrender.com/api/cars").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log("Error fetching cars")
                alert("Failed to view the cars")
            }
        )
    }

    useEffect(() => {
        fetchCarData()
    })

    return (
        <div
            style={{
                backgroundColor: "#F5F2EB",
                minHeight: "100vh"
            }}
        >
            <NavBar />

            <div className="container-fluid px-4 py-5">

                <div
                    className="card border-0 shadow-lg p-4"
                    style={{
                        borderRadius: "25px"
                    }}
                >
                    <h2
                        className="text-center fw-bold mb-2"
                        style={{
                            color: "#1C1C1C",
                            letterSpacing: "2px"
                        }}
                    >
                        VIEW ALL CARS
                    </h2>

                    <p
                        className="text-center mb-4"
                        style={{ color: "#8C7355" }}
                    >
                        Explore all registered vehicles
                    </p>

                    {
                        (
                            <div className="table-responsive">
                                <table className="table table-hover align-middle text-center">

                                    <thead>
                                        <tr>
                                            <th>Reg No</th>
                                            <th>Brand</th>
                                            <th>Model</th>
                                            <th>Type</th>
                                            <th>Fuel</th>
                                            <th>Transmission</th>
                                            <th>Seats</th>
                                            <th>Rent/Day</th>
                                            <th>City</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            data.map(
                                                (value, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{value.registration_number}</td>
                                                            <td>{value.brand}</td>
                                                            <td>{value.model}</td>
                                                            <td>{value.vehicle_type}</td>
                                                            <td>{value.fuel_type}</td>
                                                            <td>{value.transmission}</td>
                                                            <td>{value.seating_capacity}</td>
                                                            <td>₹{value.rent_per_day}</td>
                                                            <td>{value.city}</td>
                                                            <td>{value.availability_status}</td>
                                                        </tr>
                                                    )
                                                }
                                            )
                                        }
                                    </tbody>

                                </table>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default ViewCar