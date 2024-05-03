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
          <Link to={`/update/${spot._id}`}><button className="btn bg-green-400 text-white">Update</button></Link>
</td>
        <td><button onClick={()=>handleDelete(spot._id)} className="btn bg-green-400 text-white">Delete</button>
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