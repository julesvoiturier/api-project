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
    const { currentFilter } = useParams()

    useEffect(() => {
        theme == "true" ? setNightMode(true) : setNightMode(false)

        if (currentFilter == "All") {
            setFilter("All")
        } else if (currentFilter == "Europe") {
            setFilter("Europe")
        } else if (currentFilter == "Africa") {
            setFilter("Africa")
        }  else if (currentFilter == "Asia") {
            setFilter("Asia")
        }  else if (currentFilter == "Americas") {
            setFilter("Americas")
        }  else if (currentFilter == "Oceania") {
            setFilter("Oceania")
        }

    }, []);

    return (
        <div className={`w-full flex flex-col items-center gap-12 transition-all ${nightMode ? `bg-[#181819]` : `bg-slate-50`}`}>

            <div className='w-full h-[150px]'>
                <div className={`flex w-full h-[150px] max-sm:h-[225px] border-b-[1px]  justify-center items-center fixed z-10 transition-all ${nightMode ? `bg-[#2f2f32] border-[#2f2f32]`:`bg-[#ffffff] border-slate-100`}`}>
                    <div className='h-200px w-[70%] max-md:w-[75%] max-sm:w-full flex justify-between max-sm:flex-col max-md:justify-between'>
                        <div className='flex gap-5 max-sm:items-center max-sm:flex-col'>
                            <SearchBar data={data} filter={filter} nightMode={nightMode}/>
                            <Filter setFilter={setFilter} filter={filter} nightMode={nightMode}/>
                        </div>
                        
                        <div className='flex gap-5 items-center max-sm:justify-center max-sm:mt-6 '>
                            <NightMode nightMode={nightMode} setNightMode={setNightMode}/>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col justify-center items-center max-sm:mt-[60px]'>
                <div className='flex flex-wrap w-[80%] justify-center gap-8 pb-[100px]'>
                    {
                        data ? data.map((item, key) => {

                            let country = item

                            return(
                                filter == item.region || filter == "All" ? 
                                <Link key={key} to={`/Home/CountryDetails/${nightMode}/${key}/${filter}`}
                                className='w-[20%] max-md:w-[45%] max-sm:w-[90%]'>
                                    <HomeCard country={country} nightMode={nightMode} filter={filter}/>
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