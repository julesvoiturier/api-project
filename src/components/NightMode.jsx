import React, {useState} from 'react';
import moon from './../assets/img/moon.png'
import sun from './../assets/img/sun.png'

const NightMode = (props) => {

    return (
        <div>
            <button onClick={()=> props.setNightMode(!props.nightMode)} className='flex items-center gap-3'>
                <div className={`relative w-[50px] h-[25px] border-[3px] rounded-full transition-all flex items-center ${props.nightMode == true ? `bg-blue-500 border-blue-500`:`bg-slate-200 border-slate-200`}`}>
                    <div className={`absolute h-full aspect-square rounded-full transition-all ease-in-out ${props.nightMode == true ? `right-0 bg-white`:`right-[25px] bg-slate-400`}`}></div>
                </div>
                <img className='size-[20px] opacity-30' src={props.nightMode ? moon : sun} alt="" />
            </button>
        </div>
    );
}

export default NightMode;
