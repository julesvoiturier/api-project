import React, { useState, useEffect, createContext  } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HomeCard from './HomeCard';
import SearchBar from './SearchBar';
import Filter from './Filter';
import NightMode from './NightMode';

const Home = () => {

    const [ data, setData ] = useState()

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, []);

    useEffect(() => {
        console.log("hello");
    }, [data]);

    const [filter, setFilter] = useState("All")
    const [nightMode, setNightMode] = useState(false)

    const { theme } = useParams()
    useEffect(() => {
        theme == "true" ? setNightMode(true) : setNightMode(false)
    }, []);

    return (
        <div className={`w-full flex flex-col items-center gap-12 transition-all ${nightMode ? `bg-[#181819]` : `bg-slate-50`}`}>

            <div className='w-full h-[150px]'>
                <div className={`flex w-full h-[150px] border-b-[1px] border-slate-100 justify-center items-center fixed z-10 transition-all ${nightMode ? `bg-[#2f2f32] border-[#2f2f32]`:`bg-[#ffffff]`}`}>
                    <div className='h-200px w-[70%] flex justify-between'>
                        <div className='flex gap-5'>
                            <SearchBar data={data} filter={filter} nightMode={nightMode}/>
                            <Filter setFilter={setFilter} filter={filter} nightMode={nightMode}/>
                        </div>
                        
                        <div className='flex gap-5 items-center'>
                            <NightMode nightMode={nightMode} setNightMode={setNightMode}/>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col justify-center items-center'>
                <div className='flex flex-wrap w-[80%] justify-center gap-8 pb-[100px]'>
                    {
                        data ? data.map((item, key) => {

                            let country = item

                            return(
                                filter == item.region || filter == "All" ? 
                                <Link key={key} to={`/Home/CountryDetails/${nightMode}/${key}`}
                                className='w-[20%]'>
                                    <HomeCard country={country} nightMode={nightMode}/>
                                </Link> : null
                            )

                        }) : ""
                    }
                </div>
            </div>

        </div>
    );
}

export default Home;