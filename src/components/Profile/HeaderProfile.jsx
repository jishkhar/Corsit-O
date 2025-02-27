import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import profilePhoto from '../../assets/team/second/jishnu.jpg';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'HOME' }
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-[#070517] bg-opacity-100' : 'bg-[#070412]'}`}>
            <nav className='flex justify-between items-center w-[90%] mx-auto py-4 mt-5'>
                <div>
                    <Link to='/'>
                        <img src={logo} alt='Logo' className='w-[3.5rem]' />
                    </Link>
                </div>

                <div className='flex items-center gap-16'>
                    <ul className='flex lg:flex-row flex-col items-center lg:gap-[2vw] gap-10 text-[1.2rem]'>
                        {navLinks.map(({ path, label }, index) => (
                            <li key={index}>
                                <NavLink 
                                    to={path} 
                                    className={({ isActive }) => 
                                        `block py-2 pr-4 pl-3 text-[1.2rem] duration-200 ${isActive ? 'text-red-600' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="relative">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <img 
                                src={profilePhoto} 
                                alt='Profile' 
                                className='w-12 h-12 rounded-full border-1 border-white cursor-pointer'
                            />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-52 shadow-lg bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg overflow-hidden z-50">
                                <NavLink 
                                    to="/edit-profile" 
                                    className={({ isActive }) => `block px-4 py-3 hover:bg-gray-900 ${isActive ? 'bg-gray-300' : ''}`}
                                >
                                    Edit
                                </NavLink>
                                <NavLink 
                                    to="/change-password" 
                                    className={({ isActive }) => `block px-4 py-3 hover:bg-gray-900 ${isActive ? 'bg-gray-300' : ''}`}
                                >
                                    Change Password
                                </NavLink>
                                <NavLink 
                                    to="/login" 
                                    className={({ isActive }) => `block px-4 py-3 hover:bg-gray-900 ${isActive ? 'bg-gray-300' : ''}`}
                                >
                                    Logout
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
