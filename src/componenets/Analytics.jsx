import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () =>{
    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='max-[500px] mx-auto my-4' src={Laptop} alt=''/>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df98] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis ducimus provident dolorum nobis nam inventore fugiat reprehenderit tenetur numquam. Enim ut dicta praesentium repellendus quaerat doloremque adipisci assumenda quisquam?
                    </p>
                    <button className="bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics