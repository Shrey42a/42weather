import React, { useEffect, useState } from 'react';
import { getData } from './Api';
import Content from './Content';
import Loading from './Loading';
import axios from 'axios';
import Notfound from './Notfound';

function Page() {
    const [wdata, setWdata] = useState("");
    const [wdata2, setWdata2] = useState([]);
    const [loading, setLoading] = useState(false);
    const [q, setQ] = useState();

    // const savedDataString = localStorage.getItem("wdata") || "{}";
    // const savedData2 = JSON.parse(savedDataString);

    // const savedData = JSON.stringify(wdata);
    // localStorage.setItem("wdata", savedData);

    const onInputChange = (e) => {
        setQ(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setQ(e.target.value);
        }
    }

    useEffect(function () {
        getData(q).then(function (wrdata) {
            setWdata(wrdata);
            setLoading(false);
        }).catch(function () {
            setLoading(false);
        });
    }, [q]);

    const getData2 = async (q) => {
        const params = {
            key: '524d2fa70c8f4cb5b7692004232903',
            q,
            days: "5"
        }
        const response = await axios
            .get("https://api.weatherapi.com/v1/forecast.json?", { params })
        console.log("dusra data", response.data.forecast.forecastday);
        return response.data.forecast.forecastday;
    }

    useEffect(function () {
        getData2(q).then(function (wrdata2) {
            setWdata2(wrdata2);
            setLoading(false);
        });
    }, [q]);

    if (loading) {
        return (
            <>
                <Loading />
            </>
        );
    }



    return (
        <>
            <div className='rounded-lg h-max w-full space-y-2 flex flex-col justify-center items-center'>
                <div className='flex flex-row w-full justify-center items-center'>
                    <input value={q} onKeyUp={handleKeyPress} placeholder="eg- meerut" className='shadow-sm text-gray-700 h-12 rounded-lg bg-white/20 w-1/2 outline-none px-4 py-2 focus:outline focus:outline-emerald-400' />
                    <img className='h-10 w-10 relative right-12' src='/loupe.png' />
                </div>
                {wdata && <Content wdata={wdata} wdata2={wdata2} />}
                {!wdata && <Notfound />}
            </div>
        </>
    )
}
export default Page;