import React, { useEffect, useState } from 'react';
import Spots from './Spots';
import CountriesSpot from './CountriesSpot';

const Countries = () => {
    const [countriesData,setCountriesData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/countriesData')
        .then(res=>res.json())
        .then(data=>setCountriesData(data))
    },[])
    return (
        <div>
            <div className='text-center space-y-3 mb-8 my-14'>
            <h1 className="text-4xl font-bold">Discover Amazing Countries</h1>
            <p>  Explore diverse countries from around the globe, each with its own unique charm and beauty</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 '>
            {
                countriesData.map(spot=><CountriesSpot
                     key={spot._id}
                     spot={spot}
                     ></CountriesSpot>)
            }
        </div>
        </div>

    );
};

export default Countries;