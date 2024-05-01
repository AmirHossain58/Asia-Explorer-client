import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from "./Footer";
import Swal from 'sweetalert2';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
const AddTouristsSpot = () => {
    const handleAddSpot=(event)=>{
        event.preventDefault()
        const handleSelectCountry=(CountryName)=>{

        }
        const form=event.target;
        const name =form.name.value
        const email =form.email.value
        const tourists_spot_name=form.tourists_spot_name.value
        const country_Name =form.country_Name.value
        const location =form.location.value
        const short_description =form.shortDescription.value
        const average_cost =form.average_cost.value
        const seasonality =form.seasonality.value
        const travel_time =form.travel_time.value
        const totalVisitorsPerYear =form.totalVisitorsPerYear.value
        const photo =form.photo.value
        const newSpot={
            name,
            email,
            tourists_spot_name,
            country_Name,
            location,
            short_description,
            average_cost,
            seasonality,
            travel_time,
            totalVisitorsPerYear,
            photo
        }
        fetch('http://localhost:5000/TouristsSpot',{
            method:"POST",
            headers:{
             'content-type':'application/json'
            },
            body:JSON.stringify(newSpot)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
       form.reset() 
    }
    return (
        <div>
            <Navbar></Navbar>
        <div className="card shrink-0 w-full shadow-2xl bg-green-50">
            <div className='text-center max-w-[900px] mx-auto'>
            <h1 className="text-4xl mt-12 font-bold">Add Tourists Spot</h1><br />
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
  <form  onSubmit={handleAddSpot}  className="card-body">
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
      <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Your Email</span>
      </label>
      <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Tourists Spot Name</span>
      </label>
      <input type="text" name='tourists_spot_name' placeholder="tourists_spot_name" className="input input-bordered" required />
    </div>
     <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Country Name</span>
      </label>
      
        <select name='country_Name'className="select select-bordered w-full" required>
        <option disabled selected>Select a Country:</option>
        <option>Bangladesh</option>
        <option>Thailand</option>
        <option>Indonesia</option>
        <option>Malaysia</option>
        <option>Vietnam</option>
        <option>Cambodia</option>
      </select>
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Location</span>
      </label>
      <input type="text" name='location' placeholder="location" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Short Description</span>
      </label>
      <input type="text" name='shortDescription' placeholder="short description" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Travel Time</span>
      </label>
      <input type="text" name='travel_time' placeholder="travel_time" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
    <label className="label">
        <span className="label-text">Seasonality</span>
      </label>
      <input type="text" name='seasonality' placeholder="seasonality" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Average Cost</span>
      </label>
      <input type="text" name='average_cost' placeholder="average_cost" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
    <label className="label">
        <span className="label-text">Total Visitors PerYear</span>
      </label>
      <input type="text" name='totalVisitorsPerYear' placeholder="totalVisitorsPerYear" className="input input-bordered" required />
    </div>
   </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered" required />
     
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-green-300 font-bold">Add Tourists Spot</button>
    </div>
  </form>
</div>
<Footer></Footer>
    </div>
    );
};

export default AddTouristsSpot;