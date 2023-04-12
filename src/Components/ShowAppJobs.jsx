import React from 'react';
import { BeakerIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
// import { unstable_HistoryRouter } from 'react-router-dom';
// import Jobdetails from './Jobdetails';


const ShowAppJobs = ({appliedjobs}) => {
    // console.log(appliedjobs);
    const {img, postName, compName, type, duration, city, salary, country, id} = appliedjobs;

    // const history = unstable_HistoryRouter();
    // const handleClick = (jobId) => {
    //     history.push(`/details/${id}`);
    //   };

    return (
        <div className='my-3 mx-[10%] border border-[#e2e2e2] rounded'>
            {/* the immediate div is the parent div that will make three items centered */}
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                        {/* image */}
                        <img src={img} alt="" className="border rounded-lg bg-amber-50 m-2 p-3" />
                         {/* middle text */}
                        <div className="pb-4">
                            {/* Post name */}
                            <h1 className="mt-9 font-bold text-sm text-slate-700">{postName}</h1>
                            {/* company name */}
                            <p className="text-slate-700 text-sm">{compName}</p>
                            {/* job type: remote/onsight and duration */}
                            <div className="OnsightOrRemote my-1">
                                <span className='job-type'>{type}</span>
                                <span className='job-duration'>{duration}</span>
                            </div>
                            {/* location and salary */}
                            <div className="flex gap-6 items-center py-2">
                                <div className="flex gap-2 items-center text-slate-700">
                                    <MapPinIcon className="h-4 w-4" />
                                    <span className='text-xs pt-2'>{city}, {country}</span>
                                </div>

                                <div className="flex gap-2 items-center text-slate-700">
                                    <CurrencyDollarIcon className="h-4 w-4" />
                                    <span className='text-xs pt-2'>{salary}</span>
                                </div>
                            </div>

                        </div>
                </div>
                <button className='mr-5 px-5 py-3 font-bold rounded-lg bg-gradient-to-l from-purple-400 to-indigo-300 text-white'>View Details</button>

            </div>

        </div>
    );
};

export default ShowAppJobs;