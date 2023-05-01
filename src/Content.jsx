import React, { useEffect, useState } from 'react';
import Forecast from './Forecast';

function Content({ wdata, wdata2 }) {

    return (
        <>
            <div className='bg-white/10 flex flex-col lg:flex-row lg:space-y-0 space-y-2 lg:space-x-2 p-2 w-full rounded-md h-max'>
                <div className='bg-black/10 p-1 space-y-3 w-full lg:w-2/5 rounded-md'>
                    <div className='flex flex-col'>
                        <h1 className='text-5xl fnt lg:text-start text-center text-gray-800'>{wdata.location.name}</h1>
                        <div className='flex space-x-4'>
                            <h2 className='text-3xl text-gray-800 mt-5'>{wdata.location.region},</h2>
                            <h2 className='text-3xl text-gray-800 mt-5'>{wdata.location.country}</h2>
                        </div>
                    </div>
                    <h1 className='text-3xl text-gray-800 lg:text-start text-center'>Current</h1>
                    <div className='bg-black/30 px-2 py-2 rounded-sm w-full'>
                        <h2 className='text-xl text-center text-gray-300'>Forecast for {wdata.location.localtime}</h2>
                    </div>
                    <div className='flex flex-col bg-white/5 p-1 justify-between space-y-2 h-max w-full'>
                        <div className='flex lg:flex-row flex-col-reverse'>
                            <div className='p-2 flex flex-col items-center justify-center'>
                                <h1 className='lg:text-9xl text-4xl text-neutral-800'>{wdata.current.temp_c}<span className='text-xl lg:text-2xl bottom-5 relative lg:bottom-20'>o</span><span className='lg:text-5xl text-4xl bottom-0 relative lg:bottom-2'>C</span></h1>
                                <h2 className='text-xl text-neutral-800 lg:relative lg:left-6'>{wdata.current.condition.text}</h2>
                            </div>
                            <div className='h-40 lg:w-40 w-full'>
                                <img src={wdata.current.condition.icon} className='w-full h-full' />
                            </div>
                        </div>
                        <div className='ml-2 flex flex-col space-y-2'>
                            <h1 className='text-2xl lg:text-start text-center text-gray-900'>Temp in F - <span className='text-neutral-800'>{wdata.current.temp_f}</span></h1>
                            <h1 className='text-2xl lg:text-start text-center text-gray-900'>Last updated - <span className='text-neutral-800'>{wdata.current.last_updated}</span></h1>
                        </div>
                    </div>
                </div>
                <div className='bg-black/10 p-2 w-full lg:w-1/2 rounded-md'>
                    <div className='bg-black/30 px-2 py-2 rounded-sm w-full'>
                        <h2 className='text-xl text-center text-gray-300'>More description</h2>
                    </div>
                    <div className='px-2 py-4 flex flex-col justify-evenly'>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>Wind degree</h1>
                            <h2>{wdata.current.wind_degree}</h2>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>Wind speed</h1>
                            <h2>{wdata.current.wind_kph}</h2>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>Wind direction</h1>
                            <h2>{wdata.current.wind_dir}</h2>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>Pressure</h1>
                            <h2>{wdata.current.pressure_in}</h2>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>Humidity</h1>
                            <h2>{wdata.current.humidity}</h2>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>UV index</h1>
                            <h2>{wdata.current.uv}</h2>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>visibility</h1>
                            <h2>{wdata.current.vis_km}</h2>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>Gust</h1>
                            <h2>{wdata.current.gust_kph}</h2>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>Cloud</h1>
                            <h2>{wdata.current.cloud}</h2>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <h1>Preciption</h1>
                            <h2>{wdata.current.precip_mm}</h2>
                        </div>
                    </div>
                </div>
                {wdata2.length > 0 && <Forecast wdata2={wdata2} />}
            </div>
        </>
    )
}
export default Content;