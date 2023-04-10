import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {/* left portion: text */}
                <div className="mt-36">

                    <h1 className="text-7xl font-bold">
                    One Step<br></br> Closer To Your<br></br><span className="bg-gradient-to-r from-indigo-500 to-indigo-300 text-transparent bg-clip-text h-full">Dream Job</span> 
                    </h1>

                    <h1 className="text-[#757575] w-[320px] pl-2 mt-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </h1>

                    <button className='ml-2 mt-8 rounded-md bg-gradient-to-l from-indigo-400 to-purple-300 py-3 px-5 font-bold text-white'>Get Started
                    </button>

                </div>
                {/* right portion: image */}

                <div className="">
                    <img src="/src/assets/hero-user-img.gif" alt="" className="" />
                </div>
            </div> 
            {/* end of hero section */}

            {/* starting of job catagory */}
            
        </div>
    );
};

export default Home;