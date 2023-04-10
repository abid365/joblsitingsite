import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs);
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

                    <button className='ml-2 mt-8 rounded-md bg-gradient-to-l from-indigo-400 to-purple-300 py-3 px-5 font-bold text-white'>Get Started
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
                <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8">

                    <div className="jobs-card">
                        <img className="jobs-icon" src="/src/assets/Icons/accounts 1.png" alt=""/>
                        <h1 className="mt-8 font-bold">Account & Finance</h1>
                        <small className="small-text">300 Jobs Available</small>
                    </div>

                    <div className="jobs-card">
                        <img className="jobs-icon" src="/src/assets/Icons/business 1.png" alt=""/>
                        <h1 className="mt-8 font-bold">Creative Design</h1>
                        <small className="small-text">100+ Jobs Available</small>
                    </div>

                    <div className="jobs-card">
                        <img className="jobs-icon" src="/src/assets/Icons/social-media 1.png" alt=""/>
                        <h1 className="mt-8 font-bold">Marketing & Sales</h1>
                        <small className="small-text">150 Jobs Available</small>
                    </div>

                    <div className="jobs-card">
                        <img className="jobs-icon" src="/src/assets/Icons/chip 1.png" alt=""/>
                        <h1 className="mt-8 font-bold">Engineering Job</h1>
                        <small className="small-text">224 Jobs Available</small>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Home;