import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCar = () => {

    const [input, changeInput] = useState(
        {
            registration_number: "",
            brand: "",
            model: "",
            vehicle_type: "",
            fuel_type: "",
            transmission: "",
            seating_capacity: "",
            rent_per_day: "",
            city: "",
            availability_status: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-car", input).then(
            (Response)=>{
                console.log(Response.data)
                alert("Car added successfully")
            }
        ).catch(
            (error)=>{
                console.log("Error adding Car")
                alert("Failed to add Car")

            }
        )
    }

    return (
        <div
            style={{
                backgroundColor: "#F5F2EB",
                minHeight: "100vh"
            }}
        >
            <NavBar />

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-9">

                        <div
                            className="card border-0 shadow-lg p-4 p-md-5"
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
                                ADD NEW CAR
                            </h2>

                            <p
                                className="text-center mb-5"
                                style={{ color: "#8C7355" }}
                            >
                                Enter the vehicle details below
                            </p>

                            <div className="row g-4">

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Registration Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name='registration_number'
                                        value={input.registration_number}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Brand
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name='brand'
                                        value={input.brand}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Model
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name='model'
                                        value={input.model}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold" >
                                        Vehicle Type
                                    </label>
                                    <select className="form-select rounded-3" name='vehicle_type' value={input.vehicle_type} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option value="Hatchback">Hatchback</option>
                                        <option value="Sedan">Sedan</option>
                                        <option value="SUV">SUV</option>
                                        <option value="MUV">MUV</option>
                                        <option value="Luxury">Luxury</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold" >
                                        Fuel Type
                                    </label>
                                    <select className="form-select rounded-3" name='fuel_type' value={input.fuel_type} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Electric">Electric</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="CNG">CNG</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold" >
                                        Transmission
                                    </label>
                                    <select className="form-select rounded-3" name='transmission' value={input.transmission} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option value="Manual">Manual</option>
                                        <option value="Automatic">Automatic</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Seating Capacity
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control rounded-3"
                                        name='seating_capacity'
                                        value={input.seating_capacity}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Rent Per Day
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control rounded-3"
                                        name='rent_per_day'
                                        value={input.rent_per_day}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name='city'
                                        value={input.city}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold" >
                                        Availability Status
                                    </label>
                                    <select className="form-select rounded-3" name='availability_status' value={input.availability_status} onChange={inputHandler}>
                                        <option value="Available">Available</option>
                                        <option value="Booked">Booked</option>
                                        <option value="Maintenance">Maintenance</option>
                                    </select>
                                </div>

                                <div className="col-12 text-center mt-5">
                                    <button
                                        className="btn px-5 py-3 fw-semibold shadow-sm" onClick={readValue}
                                        style={{
                                            backgroundColor: "#1C1C1C",
                                            color: "#FFFFFF",
                                            borderRadius: "12px",
                                            letterSpacing: "1px"
                                        }}
                                    >
                                        ADD CAR
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCar