import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CountriesViewDetails = () => {
    const [countriesAllData,setCountriesAllData]=useState([])
    const [countriesData,setCountriesData]=useState([])
    const {id:countryName}=useParams()
    const {tourists_spot_name,
     country_Name,
    location,
     shortd_escription,
    average_cost,
     seasonality,
        }=countriesData
        console.log(countriesData);
    const filter=countriesAllData.filter(data=>data.country_Name===countryName)
    useEffect(()=>{
        fetch('http://localhost:5000/TouristsSpot')
        .then(res=>res.json())
        .then(data=>setCountriesAllData(data))
        setCountriesData(filter)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default CountriesViewDetails;