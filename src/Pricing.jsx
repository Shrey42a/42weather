import React from 'react';

function Pricing() {
    function handleSubmit() {
        alert("Thankyou for subscribing");
    }
    return (
        <>
            <h1 className='text-center text-neutral-600 uppercase font-thin text-3xl p-2'>Pricing</h1>
            <div className='bg-white/20 justify-center items-center flex flex-row space-x-2 p-2 w-full rounded-md lg:h-96 h-max'>
                <div className='lg:h-full lg:w-3/4 w-full h-max flex lg:flex-row flex-col-reverse'>
                    <div className='lg:w-1/2 w-full h-2/3 lg:h-full p-2 flex items-center justify-center'>
                        <div className='h-2/3 w-full lg:w-4/5 lg:relative lg:left-28 lg:bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg flex flex-col space-y-2'>
                            <h1 className='text-neutral-600 font-semibold tracking-widest text-xl lg:text-2xl'>One-time-payment</h1>
                            <p className='text-lg font-thin text-neutral-600'>There's a saying if you want rain you have to deal with mud too.</p>
                            <div className='w-full flex flex-wrap gap-3'>
                                <p className="flex items-center text-neutral-600 justify-center lg:justify-start">
                                    <svg className="w-4 h-4 mr-2 text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                        </path>
                                    </svg>Analytics
                                </p>
                                <p className="flex items-center text-neutral-600 justify-center lg:justify-start">
                                    <svg className="w-4 h-4 mr-2 text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                        </path>
                                    </svg>Best quality
                                </p>
                                <p className="flex items-center text-neutral-600 justify-center lg:justify-start">
                                    <svg className="w-4 h-4 mr-2 text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                        </path>
                                    </svg>Mobile
                                </p>
                                <p className="flex items-center text-neutral-600 justify-center lg:justify-start">
                                    <svg className="w-4 h-4 mr-2 text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                        </path>
                                    </svg>Updates
                                </p>
                                <p className="flex items-center text-neutral-600 justify-center lg:justify-start">
                                    <svg className="w-4 h-4 mr-2 text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                        </path>
                                    </svg>Support 24/7
                                </p>
                            </div>
                            <button onClick={handleSubmit} className='active:-mt-1 px-6 py-2 rounded-lg shadow-sm shadow-slate-600 w-28'>Buy now</button>
                        </div>
                    </div>
                    <div className='lg:w-1/2 lg:h-full h-3/4 w-full rounded-lg'>
                        <img className='lg:w-3/4 w-full h-full rounded-lg' src='https://images.wallpaperscraft.com/image/single/windmills_field_grass_492484_6240x4160.jpg' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pricing;