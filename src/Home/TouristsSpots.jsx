import React, { useEffect, useState } from 'react';
import Spots from './Spots';

const TouristsSpots = () => {
    const[spots,setSpot]=useState()
    useEffect(()=>{
        fetch('http://localhost:5000/TouristsSpot')
        .then(res=>res.json())
        .then(data=>setSpot(data))
    },[])
    return (
        <div className='mt-14'>

            <div className='text-center space-y-3 mb-8'>
            <h1 className="text-4xl font-bold">Explore Popular Tourist Destinations</h1>
            <p> Discover breathtaking destinations around the world and plan your next adventure.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 '>
            {
                spots?.slice(0, 6).map(spot=><Spots
                     key={spot._id}
                     spot={spot}
                     ></Spots>)
            }
        </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-14'>
            {
                spots?.slice(0, 6).map(spot=><Spots
                     key={spot._id}
                     spot={spot}
                     ></Spots>)
            }
        </div>
        </div>
    );
};

export default TouristsSpots;