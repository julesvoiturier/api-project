import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {

    const [search, setSearch] = useState("")

    return (
        <div className='relative w-[600px] flex flex-col gap-[16px]'>
            <input onChange={(e)=> setSearch(e.target.value)} className={`focus:outline-none border-[1px]  px-3 py-2 text-[15px] w-full rounded-[5px] ${props.nightMode ? `bg-[#181819] text-white border-[#48484a]`:`bg-[#ffffffd5] border-slate-200`}`} type="text" placeholder='search a country' />
            <div className={`rounded-[5px] absolute w-full top-[50px] flex flex-col max-h-[400px] overflow-y-scroll bg-[#ffffffd5] backdrop-blur-lg z-20 ${props.nightMode ? `bg-[#575760cd] text-white`:`bg-[#ffffffd5]` }`}>
                {
                    props.data ? props.data.map((item, key)=> {
                        return(
                            item.name.common.toLowerCase().includes(search.toLowerCase()) && search != "" ? 
                            <Link key={key} className=' transition-all text-start text-[15px]  border-b-[1px] border-[#1010101b] px-3 py-2 hover:backdrop-filter-none hover:bg-[#1010101b]'
                            to={`/Home/CountryDetails/${props.nightMode}/${key}`}
                            >{item.name.common}</Link> 
                            : null
                        )
                    }) : ""
                }
            </div>
        </div>
    );
}

export default SearchBar;
