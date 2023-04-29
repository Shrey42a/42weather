import React from 'react';
import Icons from './Icons';

function Contact() {
    return (
        <>
            <h1 className='text-center text-neutral-600 uppercase font-thin text-3xl p-2'>Contact</h1>
            <div className='bg-white/20 justify-center flex flex-row space-x-2 p-2 w-full rounded-md h-max'>
                <div className="flex lg:space-x-2 items-center justify-center flex-col lg:flex-row w-full h-full lg:px-4 lg:py-8">
                    <div className="flex items-center px-5 flex-col lg:py-1 space-y-4 py-4 lg:space-y-4 lg:h-4/5 lg:w-2/5 w-full h-1/3">
                        <h1 className="text-neutral-600 text-center font-mono">You can contact me anytime between 9am to 10am...</h1>
                        <h2 className="font-mono text-center text-neutral-600">Call me at <span className="text-blue-400 cursor-pointer font-mono">+91 89799*****</span></h2>
                        <h2 className="font-mono text-neutral-600 text-center">You can move to<span className="text-blue-400 cursor-pointer"> FAQs</span> or <span className="text-blue-400 cursor-pointer">Support</span> page to get more information about our site.</h2>
                        <div className="bg-white/10 rounded-lg space-x-6 lg:flex flex-row items-center justify-evenly hidden p-2 mt-6">
                            <div className="flex space-x-6">
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
                        </div>
                    </div>
                    <div className="lg:h-4/5 flex flex-col py-2 lg:justify-center space-y-3 lg:space-y-2 items-center lg:w-2/5 w-full px-6 lg:py-2 h-2/3">
                        <h2 className="text-neutral-600 font-mono lg:text-lg uppercase">Get in touch</h2>
                        <h1 className="lg:text-3xl font-mono text-neutral-600">Send me a message</h1>
                        <div className="w-full space-y-4">
                            <div className="flex flex-col lg:space-y-2 space-y-1 lg:h-24">
                                <label htmlFor="name" className="text-neutral-600 cursor-pointer">Name*</label>
                                <input
                                    id="name"
                                    name="name"

                                    placeholder="Your name*"
                                    className="caret-lime-400 text-neutral-600 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/30" />

                            </div>
                            <div className="flex flex-col space-y-1 lg:h-24">
                                <label htmlFor="email" className="text-neutral-600 cursor-pointer">Email*</label>
                                <input
                                    id="email"
                                    name="email"

                                    placeholder="Your email*"
                                    className="caret-lime-400 text-neutral-600 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/30" />

                            </div>
                            <div className="flex flex-col space-y-1 lg:h-24">
                                <label htmlFor="message" className="ml-2 text-neutral-600 cursor-pointer">Message*</label>
                                <textarea
                                    id="message"
                                    name="message"

                                    placeholder="Message*"
                                    className="caret-lime-400 text-neutral-600 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/30" />

                            </div>
                            <div className="flex lg:justify-start justify-center items-center space-x-2">
                                <button className="active:-mt-1 px-6 py-2 rounded-lg shadow-sm shadow-slate-600">Submit</button>
                                <button type="button" className="active:-mt-1 px-6 py-2 rounded-lg shadow-sm shadow-slate-600">Reset</button>
                            </div>
                            <div className="bg-white/10 rounded-lg space-x-4 flex flex-row items-center justify-evenly lg:hidden p-2 mt-10">
                                <Icons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;