import React from 'react';


const Banner = () => {
    return (
       <div className='relative mt-10'>
         <div className="carousel md:h-[500px] w-full  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/wd2d6k2/6634.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/NmQ7GWh/779.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/cwYx0qK/1000-F-225095899-Ts-QJk11g-Zrtzh2-Ec-IAm1-GLFD6-VE5w-Dn-G.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/f8DDzrq/842.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

      </div>
  <div className='absolute top-[40%] left-[15%] text-white space-y-3'>
    <h2 className="text-3xl">Build your Next Holiday Trip with Us</h2>
    <h2 className="text-6xl">Explore <span className='font-bold'>The world</span></h2>
    <button className="btn border bg-transparent border-white rounded-none text-white">Get  in touch</button>
  </div>
       </div>
    );
};

export default Banner;