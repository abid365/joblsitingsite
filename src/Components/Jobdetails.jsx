import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon , CubeIcon, PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import setJobToLocalStorage from '../utils/fakedb';
import { data } from 'autoprefixer';
import swal from 'sweetalert';

const Jobdetails = () => {
    const jobDetails = useLoaderData();
    const {jobDesc, jobResponsibility, eduReq, experience, salary, postName, phone, streetAddress, city, country, email } = jobDetails;
    console.log(jobDetails);

    
    
    return (
    <div className="">

        <div className="my-10 text-center"><span className='text-transparent bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-4xl font-bold'>Job Details</span></div>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 md:gap-6 lg:gap-6 mx-auto mt-20 mb-10'>
        {/* left text portion */}
        <div>
            <h1 className="font-bold text-slate-800">Job Description: <p className='inline-block font-normal text-sm text-slate-600'>{jobDesc}</p></h1>

            <h1 className="font-bold text-slate-800 mt-6">Job Responsibility: <p className='inline-block font-normal text-sm text-slate-600'>{jobResponsibility}</p></h1>

            <h1 className="font-bold text-slate-800 mt-6">Educational Requirements: <p className='font-normal text-sm text-slate-600 mt-3'>{eduReq}</p></h1>

            <h1 className="font-bold text-slate-800 mt-6">Experience: <p className='font-normal text-sm text-slate-600 mt-3'>{experience}</p></h1>
        </div>

        {/* right side job details and apply now */}
        <div className="jobandButton sm:mt-6">

            <div className='border rounded bg-gradient-to-r from-purple-50 to-indigo-100 py-4 px-4 w-fit'>
                    {/* job Details */}
                    <div>
                        <h1 className="border-b w-full text-slate-700 font-bold pb-2">Job Details</h1>
                    
                        <div className="mt-6">
                            
                            <div className="flex items-center gap-3">
                                <CurrencyDollarIcon className="h-4 w-4" />
                                <p className='text-sm text-slate-500 pt-1'>Salary: <span>{salary}(Per-Month)</span></p>
                            </div>
                            <div className="flex items-center gap-3">
                                <CubeIcon className="h-4 w-4" />
                                <p className='text-sm text-slate-500 pt-1'>Job Title: <span>{postName}</span></p>
                            </div>

                        </div>
                    </div>
                    
                    {/* job salary , job title */}
                    <div className="mt-6">
                        
                        <div className="flex items-center gap-3">
                            <CurrencyDollarIcon className="h-4 w-4" />
                            <p className='text-sm text-slate-500 pt-1'>Salary: <span>{salary}(Per-Month)</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <CubeIcon className="h-4 w-4" />
                            <p className='text-sm text-slate-500 pt-1'>Job Title: <span>{postName}</span></p>
                        </div>

                    </div>
                    
                    <h1 className="border-b w-full mt-3 text-slate-700 font-bold pb-2">Contact Information</h1>
                    {/* Contact Info */}
                    <div>
                        
                        {/* phone ,mail ,address */}
                        <div className="mt-6">
                            
                            <div className="flex items-center gap-3">
                                <PhoneIcon className="h-4 w-4" />
                                <p className='text-sm text-slate-500 pt-1'>Phone: <span>{phone}</span></p>
                            </div>
                            <div className="flex items-center gap-3">
                                <EnvelopeIcon className="h-4 w-4" />
                                <p className='text-sm text-slate-500 pt-1'>Mail: <span>{email}</span></p>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPinIcon className="h-5 w-5" />
                                <p className='text-sm text-slate-500 pt-1'>Address: <span> {streetAddress}, {city}; {country}</span></p>
                            </div>

                        </div>
                    </div>
            
                
            </div>

            <div className="mt-6">
                    <button onClick={()=>{setJobToLocalStorage(jobDetails)}} className="px-5 py-3 hover:text-slate-600  font-bold text-white rounded-lg bg-gradient-to-r from-purple-300 to-indigo-600">Apply Now</button>
                </div>
            </div>
    </div>
</div>
       
    );
};

export default Jobdetails;