import React, { useEffect, useState } from 'react';
import ShowAppJobs from './ShowAppJobs';

const Appliedjobs = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        // get data from local storage
        const storedData = localStorage.getItem("jobs");
         
        if(storedData){
            setData(JSON.parse(storedData));
        }
    }, [])

    return (
        <div className='mt-40 lg:mt-auto md:mt-auto'>
            <div className="text-5xl text-center mt-12 font-bold">
                <span className="text-center bg-gradient-to-r from-purple-400 leading-none to-indigo-800 bg-clip-text text-transparent">Applied Jobs: {data.length}
                </span>
            </div>
            {
                data.map(appliedjobs => 
                    // console.log(appliedjobs);
                    <ShowAppJobs
                    appliedjobs={appliedjobs}
                    key={appliedjobs.id}
                    ></ShowAppJobs>
                )
            }
        </div>
    );
};

export default Appliedjobs;