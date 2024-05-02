import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countriesData,setCountriesData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/TouristsSpot')
        .then(res=>res.json())
        .then(data=>setCountriesData(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Countries;