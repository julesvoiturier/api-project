import React, { useState, useEffect } from 'react';

const Filter = (props) => {

    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState("All")
    const [buttons, setButtons] = useState(["All", "Europe", "Africa", "Asia", "Americas"])

    useEffect(() => {
        console.log(active);
    }, [active]);

    return (
        <div className={`w-[150px] h-auto group relative flex flex-col`}>
            <button onClick={()=> setActive(!active)} className={`py-2 px-3 tracking-wide font-light rounded-[5px] transition-all z-20 ${props.nightMode ? 'bg-[#181819] text-slate-400 hover:bg-[#212122]': 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}>filter</button>
            <div className={`absolute top-[50px] rounded-[5px] backdrop-blur-lg flex flex-col justify-start items-start w-full transition-all overflow-hidden ease-in-out z-20 ${active == true ? "h-[500%]" : "h-[0%]"} ${props.nightMode ? `bg-[#575760cd] text-white`:`bg-[#ffffffd5]` } `}>
                {
                    buttons.map((element, key)=> {
                        return(
                            <button className={`transition-all py-2 px-3 border-b-[1px] border-[#00000013] w-full text-left hover:bg-[#1010101b] ${props.filter == element ? " text-white bg-[#5890ff] hover:bg-[#5890ff] border-[#5890ff]" : ""} `}
                            onClick={(e)=> props.setFilter(e.target.innerHTML)}>{element}</button>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Filter;
