import React from 'react';
import { BeakerIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    console.log(job);
    const {img, type, duration, city, salary, id, compName, postName, country} = job;
    return (
        <div className='border pl-10 py-10 rounded-lg'>
            <img className='h-9 w-9' src={img} alt="" />
            <h1 className="mt-9 font-bold text-base text-slate-700">{postName}</h1>
            <p className="text-slate-700 text-sm">{compName}</p>

            <div className="OnsightOrRemote my-4">
                <span className='job-type'>{type}</span>
                <span className='job-duration'>{duration}</span>
            </div>

            <div className="flex gap-6 items-center">
               <div className="flex gap-2 items-center text-slate-700">
                    <MapPinIcon className="h-4 w-4" />
                    <span className='text-xs pt-2'>{city}, {country}</span>
               </div>

                <div className="flex gap-2 items-center text-slate-700">
                <CurrencyDollarIcon className="h-4 w-4" />
                <span className='text-xs pt-2'>{salary}</span>
                </div>
            </div>

            <button className='mt-6 rounded bg-gradient-to-l hover:text-yellow-400 from-indigo-400 to-purple-300 py-3 px-5 text-sm font-bold text-white'>
                <Link to={`/details/${id}`}>View Details</Link>
            </button>
        </div>
    );
};

export default Job;