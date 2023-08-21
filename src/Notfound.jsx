import React from 'react';

function Notfound() {
    return (
        <>
            <div className='bg-white/20 backdrop-blur-sm flex text-gray-200 flex-row space-x-2 p-2 w-full rounded-md h-96'>
                <div className="flex items-center flex-col justify-center w-full space-y-2">
                    <h1 className='lg:text-5xl fnt tracking-widest text-3xl text-center font-thin'>No matching location found</h1>
                    <h2 className='lg:text-4xl tracking-widest text-2xl text-center font-thin'>you can try</h2>
                    <ul className='space-y-2 tracking-widest text-start'>
                        <li>Search for any place...</li>
                        <li>Invalid seacrh please enter valid name...</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Notfound;


export function Empty (){
    return (
        <>
        <div className='bg-white/20 backdrop-blur-sm flex text-gray-200 flex-row space-x-2 p-2 w-full rounded-md h-96'>
                <div className="flex items-center flex-col justify-center w-full space-y-2">
                    <h1 className='lg:text-5xl fnt tracking-widest text-3xl text-center font-thin'>Welcome</h1>
                    <h2 className='lg:text-4xl tracking-widest text-2xl text-center font-thin'>Here you can</h2>
                    <ul className='space-y-2 tracking-widest text-start'>
                        <li>Explore weather in every region...</li>
                    </ul>
                </div>
            </div>
        </>
    )
}