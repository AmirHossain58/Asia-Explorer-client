import React from 'react';
import Footer from '../Home/Footer';
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const updateData=useLoaderData()
    const {_id,tourists_spot_name,
      country_Name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      photo}=updateData
    console.log(updateData);
    const handleAddSpot=(event)=>{
        event.preventDefault()
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
            // method:"POST",
            // headers:{
            //  'content-type':'application/json'
            // },
            // body:JSON.stringify(newSpot)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    //    form.reset() 
    }
    return (
        <div>
            <Navbar></Navbar>
        <div className="card container mx-auto my-12 shrink-0 w-full shadow-2xl bg-green-50">
            <div className='text-center max-w-[900px] mx-auto'>
            <h1 className="text-4xl mt-12 font-bold">Add Tourists Spot</h1><br />
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
  <form  onSubmit={handleAddSpot}  className="card-body">
  
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">tourists_spot_name</span>
      </label>
      <input type="text" de name='tourists_spot_name' placeholder="tourists_spot_name" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">country_Name</span>
      </label>
      <input type="text" name='country_Name' placeholder="country_Name" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">location</span>
      </label>
      <input type="text" name='location' placeholder="location" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">short description</span>
      </label>
      <input type="text" name='shortDescription' placeholder="short description" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">travel_time</span>
      </label>
      <input type="text" name='travel_time' placeholder="travel_time" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
    <label className="label">
        <span className="label-text">seasonality</span>
      </label>
      <input type="text" name='seasonality' placeholder="seasonality" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">average_cost</span>
      </label>
      <input type="text" name='average_cost' placeholder="average_cost" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
    <label className="label">
        <span className="label-text">total Visitors PerYear</span>
      </label>
      <input type="text" name='totalVisitorsPerYear' placeholder="totalVisitorsPerYear" className="input input-bordered" required />
    </div>
   </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
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

export default Update;