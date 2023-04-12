import React, { useEffect, useState } from 'react';

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
        <div>
            <h1 className="">Applied Jobs: {data.length}</h1>
        </div>
    );
};

export default Appliedjobs;