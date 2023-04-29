import React from 'react';
import Forecastday from './Forecastday';

function Forecast({ wdata2 }) {
    console.log("forecaast", wdata2);
    return (
        <>
            <div className='bg-black/10 p-2 rounded-lg flex flex-col h-max w-full'>
                <div className='bg-black/30 flex justify-between px-2 py-2 rounded-sm w-full'>
                    <h2 className='text-xl text-gray-300'>Forecast for next 5 days</h2>
                </div>

                <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2'>
                    {wdata2.map(function (items) {
                        return (
                            <>
                                <Forecastday key={items.key} {...items} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Forecast;