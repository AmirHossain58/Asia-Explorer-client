import { Typography } from '@material-tailwind/react';
import React from 'react';
import { BiBookmark } from 'react-icons/bi';
import { BsHeadset } from 'react-icons/bs';
import { FaFireAlt, FaStar } from 'react-icons/fa';
import { IoPricetags } from 'react-icons/io5';
import { TbAdjustments } from "react-icons/tb";

const Services = () => {
    return (
        <div className='my-10'>
            <div className="mb-3 flex  justify-center">
          <Typography variant="h4" color="blue-gray" className="font-bold">
       Our Services
          </Typography>
        </div>
        <div className='grid gap-6 md:grid-cols-3'> 
            <div className='border-4 gap-7 p-5  flex flex-col text-center md:text-left md:flex-row'>
            <div className='flex justify-center items-center text-4xl my-3 text-[#01b2a6]'><TbAdjustments /></div>
            <div>
            <Typography variant="h5" color="blue-gray" className=" font-semibold mb-2">
            Personalized <br /> Matching
          </Typography>
          <p className='text-gray-400 max-w-'>Our unique matching system lets you find just the tour you want for your next holiday.</p>
            </div>
            </div>
            <div className='border-4 gap-7 p-5  flex flex-col text-center md:text-left md:flex-row'>
            <div className='flex justify-center items-center text-4xl my-3 text-[#01b2a6]'><BiBookmark /></div>
            <div>
            <Typography variant="h5" color="blue-gray" className=" font-semibold mb-2">
           Wide Variety of Tours
          </Typography>
          <p className='text-gray-400 max-w-[200px]'>We offer a wide variety of personally picked tours with destinations all over the globe.</p>
            </div>
            </div>
            <div className='border-4 gap-7 p-5  flex flex-col text-center md:text-left md:flex-row'>
            <div className='flex justify-center items-center text-4xl my-3 text-[#01b2a6]'><FaStar /></div>
            <div>
            <Typography variant="h5" color="blue-gray" className=" font-semibold mb-2">
           Highly Qualified Service
          </Typography>
          <p className='text-gray-400 max-w-[200px]'>Our tour managers are qualified, skilled, and friendly to bring you the best service.</p>
            </div>
            </div>
            <div className='border-4 gap-7 p-5  flex flex-col text-center md:text-left md:flex-row'>
            <div className='flex justify-center items-center text-4xl my-3 text-[#01b2a6]'><BsHeadset/></div>
            <div>
            <Typography variant="h5" color="blue-gray" className=" font-semibold mb-2">
            24/7 Support
          </Typography>
          <p className='text-gray-400 max-w-[200px]'>You can always get professional support from our staff 24/7 and ask any question you have.</p>
            </div>
            </div>
            <div className='border-4 gap-7 p-5  flex flex-col text-center md:text-left md:flex-row'>
            <div className='flex justify-center items-center text-4xl my-3 text-[#01b2a6]'><FaFireAlt /></div>
            <div>
            <Typography variant="h5" color="blue-gray" className=" font-semibold mb-2">
           Handpicked Hotels
          </Typography>
          <p className='text-gray-400 max-w-[200px]'>Our team offers only the best selection of affordable and luxury hotels to our clients.

</p>
            </div>
            </div>
            <div className='border-4 gap-7 p-5  flex flex-col text-center md:text-left md:flex-row'>
            <div className='flex justify-center items-center text-4xl my-3 text-[#01b2a6]'><IoPricetags /></div>
            <div>
            <Typography variant="h5" color="blue-gray" className=" font-semibold mb-2">
            
Best Price Guarantee
          </Typography>
          <p className='text-gray-400 max-w-[200px]'>If you find tours that are cheaper than ours, we will compensate the difference.</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Services;