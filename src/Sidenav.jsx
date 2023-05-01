import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

function Sidenav({ xyz }) {
    return (
        <>
            <div className="fixed backdrop-blur-sm lg:hidden md:hidden z-10 flex flex-col justify-start space-y-8 px-4 py-4 bxsd animate__animated animate__rotateInDownRight animate__repeat-1 h-full w-60 overflow-hidden bg-white/10">
                <div className='w-full h-40 rounded-lg bg-white/10 shadow-sm shadow-zinc-700'>
                    <img className='h-full w-full' src='/LOGO2.png' />
                </div>
                <ul className='text-md font-bold uppercase space-y-4 flex flex-col justify-evenly text-sky-700'>
                    <li className='active:text-lime-400 active:transition active:ease-in-out border-b p-1 w-max rounded-lg border-gray-600 cursor-pointer'><Link to="/" onClick={xyz}>Home</Link></li>
                    <li className='active:text-lime-400 active:transition active:ease-in-out border-b p-1 w-max rounded-lg border-gray-600 cursor-pointer'><Link to="/about" onClick={xyz}>About</Link></li>
                    <li className='active:text-lime-400 active:transition active:ease-in-out border-b p-1 w-max rounded-lg border-gray-600 cursor-pointer'><Link to="/pricing" onClick={xyz}>Pricing</Link></li>
                    <li className='active:text-lime-400 active:transition active:ease-in-out border-b p-1 w-max rounded-lg border-gray-600 cursor-pointer'><Link to="/contact" onClick={xyz}>Contact</Link></li>
                </ul>
                <div className='w-full space-y-4 mt-4 flex flex-col items-center justify-center'>
                    <h1 className='font-mono'>Thanx for visit 42Weather app...</h1>
                    <h2 className='font-mono font-thin'>If you have any queries you can contact us.</h2>
                </div>
                <div className="flex space-x-3">
                    <a className="wrapper" href="https://facebook.com/Akku.athlete" target="_blank" title="Shrey.fb">
                        <i className="fa fa-3x fa-facebook-square"></i>
                    </a>
                    <a className="wrapper2" href="https://twitter.com/@ShreyKr42" target="_blank" title="Shrey.tw">
                        <i className="fa fa-3x fa-twitter-square"></i>
                    </a>
                    <a className="wrapper3" href="https://instagram.com/akku_429?igshid=YmMyMTA2M2Y=" title="Akku42n" target="_blank">
                        <i className="fa fa-3x fa-github-square"></i>
                    </a>
                    <a className="wrapper4" href="https://linkedin.com/in/shrey-kumar-090914242" target="_blank" title="Shrey.In">
                        <i className="fa fa-3x fa-linkedin-square"></i>
                    </a>
                </div>
                <div>
                    <h1 className="text-center text-gray-700">
                        Copyright &#169; 2022 <span className="text-blue-500"><a href="#home">@Shreykumar</a></span>42
                    </h1>
                </div>
            </div>
        </>
    )
}
export default Sidenav;