import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';


const Home = () => {
    const jobs = useLoaderData();
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = ()=>{
        setShowAll(true);
    }

    return (
        <div>
            <section className="">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {/* left portion: text */}
                <div className="mt-36">

                    <h1 className="text-7xl font-bold">
                    One Step<br></br> Closer To Your<br></br><span className="bg-gradient-to-r from-indigo-500 to-indigo-300 text-transparent bg-clip-text h-full">Dream Job</span> 
                    </h1>

                    <h1 className="text-[#757575] w-[320px] pl-2 mt-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </h1>

                    <button className='ml-2 mt-8x rounded-md bg-gradient-to-l from-indigo-400 to-purple-300 py-3 p-5 fo-bold text-white'>Get Startednt
                    </button>

                </div>
                {/* right portion: image */}

                <div className="">
                    <img src="/src/assets/hero-user-img.gif" alt="" className="" />
                </div>
            </div> 
            </section>
           
            {/* end of hero section */}

            {/* starting of job catagory */}

            <div className="">

                <div className="text-center mt-32">
                    <h1 className="text-5xl font-bold text-slate-800">Job Category List</h1>
                    <p className="mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                {/* available jobs */}
                <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-3 mt-8">

                    <div className="jobs-card">
                        <img className="jobs-icon" src="/src/assets/Icons/accounts 1.png" alt=""/>
                        <h1 className="mt-8 font-bold">Account & Finance</h1>
                        <small className="small-text">300+ Jobs Available</small>
                    </div>

                    <div className="jobs-card">
                        <img className="jobs-icon" src="/src/assets/Icons/business 1.png" alt=""/>
                        <h1 className="mt-8 font-bold">Creative Design</h1>
                        <small className="small-text">100+ Jobs Available</small>
                    </div>

                    <div className="jobs-card">
                        <img className="jobs-icon" src="/src/assets/Icons/social-media 1.png" alt=""/>
                        <h1 className="mt-8 font-bold">Marketing & Sales</h1>
                        <small className="small-text">150+ Jobs Available</small>
                    </div>

                    <div className="jobs-card">
                        <img className="jobs-icon" src="/src/assets/Icons/chip 1.png" alt=""/>
                        <h1 className="mt-8 font-bold">Engineering Job</h1>
                        <small className="small-text">224+ Jobs Available</small>
                    </div>

                </div>

            </div>

            {/* fetured job section,  */}
            <div className="mt-36">
                <h1 className='text-center text-5xl font-bold text-slate-800'>Featured Jobs</h1>

                <p className="text-slate-600 mt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

             <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-2 mt-8 gap-6">
             {
                    jobs.slice(0, showAll? 9: 4).map(job =>
                        // console.log(job);
                        <Job
                        job={job}
                        key={job.id}
                        ></Job>
                    )

              }
                
             </div>
            </div>
            <div className='my-10 lg:flex lg:justify-center md:flex md:justify-center'>
                    {
                        !showAll && (
                            <div className='lg:w-fit md:w-fit sm:text-center' onClick={handleShowAll}>
                                <button className='w-full font-bold text-sm bg-gradient-to-l from-purple-400 to-indigo-400 px-5 py-3 rounded text-white'>View All Jobs</button>
                            </div>
                        )
                    }
            </div>
        </div>
    );
};

export default Home;