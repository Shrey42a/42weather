import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <h1 className='text-center text-neutral-600 uppercase font-thin text-3xl p-2'>About</h1>
            <div className='bg-white/20 justify-center flex flex-row space-x-2 p-2 w-full rounded-md lg:h-96 h-max'>
                <div className='h-full w-4/5 p-2 flex lg:flex-row flex-col items-center justify-center lg:space-x-3'>
                    <div className='lg:h-4/5 lg:w-1/3 h-1/2 w-full rounded-lg'>
                        <img className='h-full w-full rounded-lg' src='LOGO2.png' />
                    </div>
                    <div className='lg:h-4/5 lg:w-1/2 h-3/4 w-full rounded-lg flex flex-col lg:items-start items-center justify-evenly space-y-4'>
                        <h1 className='lg:text-3xl text-lg fnt text-neutral-600 font-thin tracking-widest'>Four-2-Weather...</h1>
                        <h2 className='text-lg text-neutral-600 lg:text-start text-center'>The weather searching app</h2>
                        <p className='text-lg text-neutral-600 lg:text-start text-center'>Here, you can saerch weather for any place with 3 day forecasting</p>
                        <Link to="/" className='active:-mt-1 px-8 py-2 rounded-md shadow-sm shadow-zinc-800'>Get started</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;