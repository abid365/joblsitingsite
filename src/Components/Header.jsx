import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };


    return (
        
        <div className='mt-5 px-8 flex justify-between items-center'>
            {/* Brand name */}
            <Link title="Navigate to Home" to="/" className="text-3xl text-slate-800 font-bold">CuratorVault</Link>
            {/* menus */}
            <ul className="lg:inline-flex gap-10 hidden  md:inline-flex">
            <li>
                    <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/statistics'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >Statistics</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/appliedjobs'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >Applied Jobs</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/blogs'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >Blogs</NavLink>
                </li>
            </ul>
            
            {/* mobile nav section */}
            <div className='lg:hidden'>
                <button className='bg-sky-300 hover:bg-sky-500 text-white font-bold px-3 py-2 rounded text-sm relative' onClick={toggleMenu}>Menu</button>
                {isOpen && (
                    <ul className='mt-3 absolute bg-gradient-to-r from=indigo-50 to-sky-100'>
                        <li className='py-2 text-xs'>
                            <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Home</NavLink>
                        </li>
                        <li className='py-2 text-xs'>
                            <NavLink
                            to='/statistics'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Statistics</NavLink>
                        </li>
                        <li className='py-2 text-xs'>
                            <NavLink
                            to='/appliedjobs'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Applied Jobs</NavLink>
                        </li>
                        <li className='py-2 text-xs'>
                            <NavLink
                            to='/blogs'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Blogs</NavLink>
                        </li>
                    </ul>
                )}
            </div>

            {/* button for large and medium devices */}
            <button className='hidden lg:block md:block rounded-md bg-gradient-to-l from-indigo-400 to-purple-300 py-3 px-5 font-bold text-white'>Start Applying</button>
        </div>
    );
};

export default Header;