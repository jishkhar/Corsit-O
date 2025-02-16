import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: 'events', label: 'EVENTS' },
        { path: 'about', label: 'ABOUT' },
        { path: 'projects', label: 'PROJECTS' },
        { path: 'team', label: 'TEAM' },
        { path: 'alumni', label: 'ALUMNI' },
        { path: 'register', label: 'REGISTER' },
        { path: 'contact', label: 'CONTACT' }
    ];

    return (
        <header className='bg-[#171717]'>
            <nav className='flex justify-between items-center w-[92%] mx-auto py-6'>
                <div>
                    <Link to='/'>
                        <div>
                            <img src={logo} alt='Logo' className='w-[3.5rem]' />
                        </div>
                    </Link>
                </div>

                <div>
                    <div className={`lg:static absolute lg:w-auto w-full lg:min-h-fit min-h-[60vh] left-0 ${navOpen ? 'top-[10%]' : 'top-[-100%]'}`}>
                        <ul className='flex lg:flex-row flex-col items-center lg:gap-[2vw] gap-10 text-[1.3rem]'>
                            {navLinks.map(({ path, label }, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={path} 
                                        className={({ isActive }) => 
                                            `block py-2 pr-4 pl-3 text-[1.375rem] duration-200 ${isActive ? 'text-red-600' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
