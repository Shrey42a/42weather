import React from 'react';

function Forecastday({ date, day, astro }) {
    return (
        <>
            <div className='lg:w-1/3 w-full h-full rounded-sm bg-white/40'>
                <div className='h-1/3 w-full'>
                    <img src={day.condition.icon} className='w-full h-full' />
                </div>
                <div className='text-center px-1 py-2'>
                    <h2 className='font-semibold'>{day.condition.text}</h2>
                </div>
                <div className='flex justify-between px-1 py-2'>
                    <h1>Date</h1>
                    <h2>{date}</h2>
                </div>
                <div className='flex justify-between px-1 py-2'>
                    <h1>Max temp</h1>
                    <h2>{day.maxtemp_c}</h2>
                </div>
                <div className='flex justify-between px-1 py-2'>
                    <h1>Min temp</h1>
                    <h2>{day.mintemp_c}</h2>
                </div>
                <div className='flex justify-between px-1 py-2'>
                    <h1>UV</h1>
                    <h2>{day.uv}</h2>
                </div>
                <div className='flex justify-between px-1 py-2'>
                    <h1>Sunrise</h1>
                    <h2>{astro.sunrise}</h2>
                </div>
                <div className='flex justify-between px-1 py-2'>
                    <h1>Sunset</h1>
                    <h2>{astro.sunset}</h2>
                </div>
            </div>
        </>
    )
}
export default Forecastday;