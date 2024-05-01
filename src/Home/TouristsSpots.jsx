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
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-14'>
            {
                spots?.slice(0, 6).map(spot=><Spots
                     key={spot._id}
                     spot={spot}
                     ></Spots>)
            }
        </div>
    );
};

export default TouristsSpots;