import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer';
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
  const [spotData,setSpotData]=useState()
  const id=useParams()
    const spotDataAll=useLoaderData()
    const filter=spotDataAll.find(data=>data._id===id.id)
  useEffect(()=>{
    setSpotData(filter)
  },[])
    const {_id,tourists_spot_name,
      country_Name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      photo}=spotData||{}
    const handleUpdateSpot=(event)=>{
        event.preventDefault()
        const form=event.target;
        const tourists_spot_name=form.tourists_spot_name.value
        const country_Name =form.country_Name.value
        const location =form.location.value
        const short_description =form.shortDescription.value
        const average_cost =form.average_cost.value
        const seasonality =form.seasonality.value
        const travel_time =form.travel_time.value
        const totalVisitorsPerYear =form.totalVisitorsPerYear.value
        const photo =form.photo.value
        const updateSpot={
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
        console.log(updateSpot);
        fetch(`http://localhost:5000/TouristsSpot/${_id}`,{
            method:"PUT",
            headers:{
             'content-type':'application/json'
            },
            body:JSON.stringify(updateSpot)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
        <div className="card container mx-auto my-12 shrink-0 w-full shadow-2xl ">
            <div className='text-center max-w-[900px] mx-auto'>
            <h1 className="text-4xl mt-12 font-bold">Update Tourists Spot</h1><br />
            <p>Update Tourist Spot: Customize and refine your travel destinations with ease. Update details, adjust descriptions, and keep your list current for unforgettable adventures.</p>
            </div>
  <form  onSubmit={handleUpdateSpot}  className="card-body">
  
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Tourists Spot Name</span>
      </label>
      <input type="text" defaultValue={tourists_spot_name} name='tourists_spot_name' placeholder="tourists_spot_name" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Country Name</span>
      </label>
      <select name='country_Name'className="select select-bordered w-full" required>
        <option >{country_Name}</option>
        <option>Bangladesh</option>
        <option>Thailand</option>
        <option>Indonesia</option>
        <option>Malaysia</option>
        <option>Vietnam</option>
        <option>Cambodia</option>
      </select>
      {/* <input type="text" defaultValue={country_Name}  name='country_Name' placeholder="country_Name" className="input input-bordered" required /> */}
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Location</span>
      </label>
      <input type="text" defaultValue={location}  name='location' placeholder="location" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Short Description</span>
      </label>
      <input type="text" defaultValue={short_description}  name='shortDescription' placeholder="short description" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Travel Time</span>
      </label>
      <input type="text" defaultValue={travel_time}  name='travel_time' placeholder="travel_time" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
    <label className="label">
        <span className="label-text">Seasonality</span>
      </label>
      <input type="text" defaultValue={seasonality}  name='seasonality' placeholder="seasonality" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">Average Cost</span>
      </label>
      <input type="text" defaultValue={average_cost}   name='average_cost' placeholder="average_cost" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
    <label className="label">
        <span className="label-text">Total Visitors PerYear</span>
      </label>
      <input type="text" defaultValue={totalVisitorsPerYear}  name='totalVisitorsPerYear' placeholder="totalVisitorsPerYear" className="input input-bordered" required />
    </div>
   </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" defaultValue={photo}  name='photo' placeholder="Enter photo URL" className="input input-bordered" required />
     
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

export default Update;