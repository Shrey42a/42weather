import React, { useState } from 'react';
import Sidenav from './Sidenav';
import { Link } from 'react-router-dom';

function Navbar() {
    const [sidenav, setSidenav] = useState(false);

    function openSidenav() {
        setSidenav(!sidenav);
    }
    return (
        <>
            <section className="z-10 h-20 w-full overflow-hidden sticky -top-2 bg-white/20 backdrop-blur-sm p-2 flex items-center justify-between px-2 lg:px-8">
                <div className="lg:h-24 lg:w-24 h-20 w-20 cursor-pointer">
                    <Link to="/"><img src='/st2.png' className='h-full w-full scale-75'></img></Link>
                </div>
                <div className='p-2 hidden lg:block md:block'>
                    <ul className='text-md flex font-bold uppercase space-x-4 flex-row justify-evenly text-neutral-600'>
                        <Link to="/"><li className='hover:text-neutral-700 hover:transition hover:ease-in-out cursor-pointer'>Home</li></Link>
                        <Link to="/about"><li className='hover:text-neutral-700 hover:transition hover:ease-in-out cursor-pointer'>About</li></Link>
                        <Link to="/pricing"><li className='hover:text-neutral-700 hover:transition hover:ease-in-out cursor-pointer'>Pricing</li></Link>
                        <Link to="/contact"><li className='hover:text-neutral-700 hover:transition hover:ease-in-out cursor-pointer'>Contact</li></Link>
                    </ul>
                </div>
                <div onClick={openSidenav} className='w-1/4 lg:hidden md:hidden flex justify-end'>
                    <button className="rounded bg-white/20 px-3 py-2.5 text-white transition duration-150 ease-in-out hover:shadow-lg focus:bg-white/30 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                        <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="gray"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </div>
            </section>
            {sidenav && <Sidenav xyz={openSidenav} />}
        </>
    )
}
export default Navbar;