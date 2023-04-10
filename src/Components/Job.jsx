import React from 'react';

const Job = ({job}) => {
    console.log(job);
    return (
        <div className='border pl-10 py-10 rounded-lg'>
            <img className='h-9 w-9' src={job.img} alt="" />
            <h1 className="mt-9 font-bold">{job.postName}</h1>
            <p className="text-slate-700 text-sm">{job.compName}</p>

            <div className="OnsightOrRemote my-4">
                <span className='mr-3 text-xs font-extrabold bg-gradient-to-r from-indigo-500 to-indigo-300 text-transparent bg-clip-text border rounded px-3 py-2'>{job.type}</span>
                <span className='text-xs font-extrabold bg-gradient-to-r from-indigo-500 to-indigo-300 text-transparent bg-clip-text border rounded px-3 py-2'>{job.duration}</span>
            </div>

            <span></span>
            <span></span>
            <button className=''>View Details</button>
        </div>
    );
};

export default Job;