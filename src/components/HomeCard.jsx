import React from 'react';

const HomeCard = (props) => {

    return (
        <div className={`w-full h-[300px] border-b-[2px] rounded-[10px] overflow-hidden transition-all hover:scale-[103%] ${props.nightMode ? `bg-[#2f2f32] border-[#2f2f32]`:`bg-slate-100 border-slate-200`}`}>
            <div className='h-[50%] overflow-hidden flex justify-center items-center'>
                <img className='h-[100%] size-full object-cover' src={props.country.flags.svg} alt="" />
            </div>
            <div className='h-[50%] p-4 flex flex-col justify-end'>
                <div className={`font-bold text-[18px] tracking-wide mb-2 ${props.nightMode ? `text-white`:`text-black` }`}>{props.country.name.common}</div>
                <div className='text-[14px] tracking-wide text-slate-400 font-light'>Population: {props.country.population}</div>
                <div className='text-[14px] tracking-wide text-slate-400 font-light'>Region: {props.country.region}</div>
                <div className='text-[14px] tracking-wide text-slate-400 font-light'>Capital: {props.country.capital}</div>
            </div>
        </div>
    );
}

export default HomeCard;