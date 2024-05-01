import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer';
import SpotsCard from '../AllTouristsSpot/SpotsCard';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
const AllTouristsSpot = () => {
    const [click,setClick]=useState(true)
    const[spots,setSpot]=useState([])
    const [sort,setSort]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/TouristsSpot')
        .then(res=>res.json())
        .then(data=>setSpot(data))
        if(click){
            
            setSort(spots)
        }
    },[spots,click])
    const handleSort=(sortBy)=>{
        if(sortBy==='ascending'){
            setClick(false)
            const sortAscending=spots.slice().sort((a, b) => a.average_cost[1] - b.average_cost[1])
            setSort(sortAscending)
        }
        else if(sortBy==='descending'){
            setClick(false)
            const sortAscending=spots.slice().sort((a, b) => b.average_cost[1] - a.average_cost[1])
            console.log(sortAscending);
            setSort(sortAscending)
        }
    }
    return (
        <div>
            <Navbar></Navbar>
        <div className='container mx-auto '>

        <div className='my-5 flex justify-center'>
        <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-12">
        <li>
            <details >
            <summary>Sort by Average Cost:</summary>
            <ul>
                <li onClick={()=>handleSort('ascending')}><a>Ascending</a></li>
                <li onClick={()=>handleSort('descending')}><a>Descending</a></li>
            
            </ul>
            </details>
        </li>
        </ul>
        </div>


        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14'>
            {
                sort?.map(spot=><SpotsCard
                     key={spot._id}
                     spot={spot}
                     ></SpotsCard>)
            }
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AllTouristsSpot;