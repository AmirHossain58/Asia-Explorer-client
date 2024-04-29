import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
const Blog = () => {
    return (
        <div>
           <div className='container mx-auto'>
           <div className=' text-center font-semibold py-8 mt-12 bg-green-50'>
                <h1 className="text-4xl mb-2">Welcome to Our Blog </h1>
                <p>Welcome to our vibrant and insightful blog, your go-to destination for captivating stories, thought-provoking articles, and expert advice.</p>
            </div>
            <div className='bg-[#031a29] px-6 py-14 text-white'>
                <h3 className=''>ALL BLOGS <br /> <span className='text-4xl'>
                Asia Explorer</span></h3>

            <div className='grid justify-center md:grid-cols-2 lg:grid-cols-4'>
            <Card className="mt-6 w-72 border rounded-none">
      <CardHeader color="blue-gray" className="relative h-56 rounded-none">
        <img
          src="https://hotelsholiday-workdo.myshopify.com/cdn/shop/articles/pexels-armin-rimoldi-5269621.png?v=1679293551"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="mb-2">
        Hotels/ 20 Mar 2024
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Discovering new routes
        </Typography>
        <Typography>
        Some things that matter to guests in hotel descriptions are the location of the hotel, the amenities offered, an...
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="outlined" className='text-white'>BOOK NOW</Button>
      </CardFooter>
              </Card><Card className="mt-6 w-72 border rounded-none">
      <CardHeader color="blue-gray" className="relative h-56 rounded-none">
        <img
          src="https://hotelsholiday-workdo.myshopify.com/cdn/shop/articles/pexels-caroline-cagnin-1860622.png?v=1679293519"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="mb-2">
        Hotels/ 20 Mar 2024
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Tuning travelling frequency
        </Typography>
        <Typography>
    
A premise located at a scenic or tourist place specially built with...
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="outlined" className='text-white'>BOOK NOW</Button>
      </CardFooter>
              </Card><Card className="mt-6 w-72 border rounded-none">
      <CardHeader color="blue-gray" className="relative h-56 rounded-none">
        <img
          src="https://hotelsholiday-workdo.myshopify.com/cdn/shop/articles/pexels-erica-zhao-2670273.png?v=1679293385"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="mb-2">
        Hotels/ 20 Mar 2024
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Exploring every bit
        </Typography>
        <Typography>
      
A place where a lot of people go on holiday, usually one with a lot of hotels, bars, and restaurants...
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="outlined" className='text-white'>BOOK NOW</Button>
      </CardFooter>
              </Card><Card className="mt-6 w-72 border rounded-none">
      <CardHeader color="blue-gray" className="relative h-56 rounded-none">
        <img
          src="https://hotelsholiday-workdo.myshopify.com/cdn/shop/articles/pexels-helena-lopes-4011385.png?v=1679293336"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="mb-2">
        Hotels/ 20 Mar 2024
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Adventures unseen

        </Typography>
        <Typography>
        A perfect vacation, in my opinion, is a type of vacation that would be thoroughly enjoyable and refreshing....
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="outlined" className='text-white'>BOOK NOW</Button>
      </CardFooter>
              </Card><Card className="mt-6 w-72 border rounded-none">
      <CardHeader color="blue-gray" className="relative h-56 rounded-none">
        <img
          src="https://hotelsholiday-workdo.myshopify.com/cdn/shop/articles/pexels-rachel-claire-4993255.png?v=1679293013"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="mb-2">
        Hotels/ 20 Mar 2024


        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Travelling infusion
        </Typography>
        <Typography>
        Holidays are special because we can show that they are different from regular days by putting special...
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="outlined" className='text-white'>BOOK NOW</Button>
      </CardFooter>
              </Card>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Blog;