import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer';
import { AuthContext } from '../provider/AuthProvider';
import SpotsCard from '../AllTouristsSpot/SpotsCard';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyList = () => {
    const {user,}=useContext(AuthContext)
    const [userAddData,setUseAddData]=useState([])
    const [userAddData1,setUseAddData1]=useState([])
    const [userAddDataSort,setUseAddDataSort]=useState([])
    // console.log(userAddDataSort);
    useEffect(()=>{
        fetch('http://localhost:5000/TouristsSpot')
        .then(res=>res.json())
        .then(data=>{
            setUseAddData(data)

        })
        const remaining = userAddData.filter(stat=> stat.email === user.email)
        setUseAddData1(remaining)
        
    },[userAddData])
    const handleDelete=(id)=>{
      // console.log(id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/TouristsSpot/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Tourists Spots has been deleted.',
                            'success'
                        )
                        const remaining = userAddDataSort.filter(data => data._id !== id);
                        setUseAddDataSort(remaining);
                    }
                })

        }
    })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto gap-5 mt-14'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Tourists Spot Name</th>
        <th>Average Cost</th>
        <th>Travel Time</th>
        <th>seasonality</th>
        <th>Total Visitors PerYear</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
            {
                userAddData1?.map((spot,i)=><tr key={spot._id}>
        <th>{i+1}</th>
        <td>{spot.tourists_spot_name},{spot.location},{spot.country_Name}</td>
        <td>{spot.average_cost}</td>
        <td>{spot.travel_time}</td>
        <td>{spot.seasonality}</td>
        <td>{spot.totalVisitorsPerYear}</td>
        <td>
          <Link to={`/update/${spot._id}`}><button className="btn bg-green-300">Update</button></Link>
          
          
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <div onClick={()=>handleSort(spot._id)}>
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()} >Update</button> */}
{/* </div> */}
{/* <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <div className="card shrink-0 w-full shadow-2xl bg-green-50">
            <div className='text-center max-w-[900px] mx-auto'>
            <h1 className="text-4xl mt-12 font-bold">Add Tourists Spot</h1><br />
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
 <div className=''>
 <form method="" onSubmit={()=>handleUpdate()}  className="card-body">
   
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">tourists_spot_name</span>
      </label>
      <input type="text" defaultValue={userAddDataSort.tourists_spot_name} name='tourists_spot_name' placeholder="tourists_spot_name" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">country_Name</span>
      </label>
      <input type="text" defaultValue={userAddDataSort.country_Name} name='country_Name' placeholder="country_Name" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">location</span>
      </label>
      <input type="text" defaultValue={userAddDataSort.location} name='location' placeholder="location" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">short description</span>
      </label>
      <input type="text"defaultValue={userAddDataSort.short_description} name='shortDescription' placeholder="short description" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">travel_time</span>
      </label>
      <input type="text"defaultValue={userAddDataSort.travel_time} name='travel_time' placeholder="travel_time" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
    <label className="label">
        <span className="label-text">seasonality</span>
      </label>
      <input type="text"defaultValue={userAddDataSort.seasonality} name='seasonality' placeholder="seasonality" className="input input-bordered" required />
    </div>
   </div>
   <div className='flex gap-4'>
   <div className="form-control flex-1">
      <label className="label">
        <span className="label-text">average_cost</span>
      </label>
      <input type="text"defaultValue={userAddDataSort.average_cost} name='average_cost' placeholder="average_cost" className="input input-bordered" required />
    </div> <div className="form-control flex-1">
    <label className="label">
        <span className="label-text">total Visitors PerYear</span>
      </label>
      <input type="text"defaultValue={userAddDataSort.totalVisitorsPerYear} name='totalVisitorsPerYear' placeholder="totalVisitorsPerYear" className="input input-bordered" required />
    </div>
   </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="text"defaultValue={userAddDataSort.photo} name='photo' placeholder="Enter photo URL" className="input input-bordered" required />
     
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-green-300 font-bold">Update Tourists Spot</button>
    </div>
  </form>
 </div>
</div>
    
  </div>
</dialog> */}
</td>
        <td><button onClick={()=>handleDelete(spot._id)} className="btn bg-green-300">Delete</button>
        </td>
      </tr>
                )
            }
      
     
    </tbody>
  </table>
</div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default MyList;