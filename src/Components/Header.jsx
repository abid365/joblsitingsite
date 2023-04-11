import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-5 px-8 flex justify-between items-center'>
            {/* Brand name */}
            <Link title="Navigate to Home" to="/" className="text-3xl text-slate-800 font-bold">CuratorVault</Link>
            {/* menus */}
            <ul className="inline-flex gap-10">
            <li>
                    <NavLink
                    to='/'
                    className={({isActive})=>{isActive? 'active' : 'default'}}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/statistics'
                    className={({isActive})=>{isActive? 'active' : 'default'}}
                    >Statistics</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/appliedjobs'
                    className={({isActive})=>{isActive? 'active' : 'default'}}
                    >Applied Jobs</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/blogs'
                    className={({isActive})=>{isActive? 'active' : 'default'}}
                    >Blogs</NavLink>
                </li>
            </ul>
            <button className='rounded-md bg-gradient-to-l from-indigo-400 to-purple-300 py-3 px-5 font-bold text-white'>Start Applying</button>
        </div>
    );
};

export default Header;