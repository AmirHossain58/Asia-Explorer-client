import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';
import Spots from './Spots';

const SpecificCountrySpot = () => {
    const [countriesData,setCountriesData]=useState([])
    const allData=useLoaderData()
    const {id:countryName}=useParams()
    const {tourists_spot_name,
     country_Name,
    location,
     shortd_description,
    average_cost,
     seasonality,
        }=countriesData
        useEffect(()=>{
            const filter=allData.filter(data=>data.country_Name===countryName)
            setCountriesData(filter)

        },[])

        
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 container mx-auto my-16 items-center '>
            {
                countriesData?.slice(0, 6).map(spot=><Spots
                     key={spot._id}
                     spot={spot}
                     ></Spots>)
            }
        </div>
            <Footer></Footer>
        </div>
    );
};

export default SpecificCountrySpot;