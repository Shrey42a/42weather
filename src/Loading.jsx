import React from 'react';

function Loading() {
    return (
        <>
            <div className='bg-white/20 flex flex-row space-x-2 p-2 w-full rounded-md h-96'>
                <div className="simple-spinner">
                    <span></span>
                </div>
            </div>
        </>
    )
}
export default Loading;