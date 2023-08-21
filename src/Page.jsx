import React, { useState } from 'react';
import { getData } from './Api';
import Content from './Content';
import Notfound, { Empty } from './Notfound';
import Loading from './Loading';

function Page() {
    const [wdata, setWdata] = useState();
    const [loading, setLoading] = useState(true);
    const [q, setQ] = useState();

    console.log("data",wdata);

    // const savedDataString = localStorage.getItem("wdata") || "{}";
    // const savedData2 = JSON.parse(savedDataString);

    // const savedData = JSON.stringify(wdata);
    // localStorage.setItem("wdata", savedData);

    const onInputChange = (e) => {
        setQ(e.target.value);
    }

    function handleClick(){
        setLoading(true);
        getData(q).then(function (wrdata) {
            setWdata(wrdata);
            setLoading(false);
        }).catch(function () {
            setLoading(false);
        });
    }

    return (
        <>
            <div className='rounded-lg h-max w-full space-y-2 flex flex-col justify-center items-center'>
                <div className='flex flex-row w-full justify-center items-center'>
                    <input value={q} onChange={onInputChange} placeholder="eg- meerut" className='shadow-sm text-gray-100 h-12 rounded-lg bg-white/20 w-1/2 outline-none px-4 py-2 focus:outline focus:outline-emerald-400' />
                    <img className='h-10 w-10 relative right-12' src='/loupe.png' />
                </div>
                <button className='text-gray-200 px-4 py-1 outline outline-emerald-400 backdrop-blur-sm active:translate-y-1 transition ease-in-out bg-white/10 rounded-md' onClick={handleClick}>Submit</button>
                {wdata === undefined && <Empty /> || loading && <Loading />}
                {wdata && <Content wdata={wdata} />}
            </div>
        </>
    )
}
export default Page;