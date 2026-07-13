import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'


const AddCars = () => {

    const [input, changeInput] = useState({
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
})


     const inputHandler = (event)=>{
      changeInput({...input,[event.target.name]:event.target.value})
     }

     const readValue = () => {
    console.log(input);

    axios.post("https://host-demo-app.onrender.com/api/add-car", input)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
        });
}
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <br></br>
                    <h1><b>ADD CARS</b></h1>
                    <br></br>
                    <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label  className="form-label">registration number</label>
                                <input type="text" 
                                className="form-control"
                                name="registration_number" 
                                value={input.registration_number}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label  className="form-label">brand</label>
                                <input type="text" 
                                className="form-control" 
                                 name="brand" 
                                value={input.brand}
                                onChange={inputHandler}/>
                            </div>
                             <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">model</label>
                                <input type="text" 
                                className="form-control"
                               name="model" 
                                value={input.model}
                                onChange={inputHandler}/>
                            </div>
                           <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">vehicle type</label>
                            <select name="" id="" className="form-control" name="vehicle_type" value={input.vehicle_type} onChange={inputHandler}>
                                <option value="Select mode">Select Mode</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="MUV">MUV</option>
                                <option value="Luxury">Luxury</option>
                                
                            </select>
                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">fuel type</label>
                            <select name="" id="" className="form-control" name="fuel_type" value={input.fuel_type} onChange={inputHandler}>
                                <option value="Select mode">Select Mode</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="CNG">CNG</option>
                                
                            </select>
                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">transmission</label>
                            <select name="" id="" className="form-control" name="transmission" value={input.transmission} onChange={inputHandler}>
                                <option value="Select mode">Select Mode</option>
                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
                                
                            </select>
                            
                        </div>
                           
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">seating capacity</label>
                               <input type="number"
                                 className="form-control"
                            name="seating_capacity" 
                                value={input.seating_capacity}
                                onChange={inputHandler}/>
                            </div>
                             <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">rent per day</label>
                               <input type="number"
                                 className="form-control"
                            name="rent_per_day" 
                                value={input.rent_per_day}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">city</label>
                                <input type="text" 
                                className="form-control"
                               name="city" 
                                value={input.city}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">availability status</label>
                                <input type="text" 
                                className="form-control"
                               name="availability_status" 
                                value={input.availability_status}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddCars