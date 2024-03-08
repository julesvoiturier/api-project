import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CountryDetails = () => {

    const { id } = useParams()
    const [data, setData] = useState([])
    const country = data[id]

    const { theme } = useParams()
    const nightMode = theme

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, []);

    return (
        <div className={`w-full h-screen ${nightMode == "true" ? `bg-[#181819]`:`bg-slate-100`}`}>
            <div className='absolute left-0 right-0 top-0 bottom-0 m-auto w-[70%] aspect-[2/1]'>
                <Link className={`absolute hover:bg-blue-500 hover:text-white transition-all top-[100%] right-0 left-0 m-auto max-w-[100px] text-center px-4 py-2 rounded-[5px] ${nightMode == "true" ? `bg-[#2f2f32] text-slate-400`:`bg-slate-200 text-slate-500 `}`}
                to={`/Home/${nightMode}`}>Home</Link>
                {
                    data.length > 0 ?
                    <div className='h-full w-full flex items-center justify-center'>
                        <div className='h-full max-w-[60%] flex items-center'>
                            <div className='h-[85%] rounded-l-[10px] bg-yellow-500 overflow-hidden'>
                                <img className='h-[100%] object-cover' src={country.flags.svg} alt="" />
                            </div>
                        </div>
                        <div className={` flex items-center gap-10 h-[85%] rounded-r-[10px] p-8 ${nightMode == "true" ? `bg-[#2f2f32] text-slate-400`:`bg-white`}`}>
                            <div className='h-full flex flex-col gap-5 justify-between'>
                                <div className='flex flex-col gap-6'>
                                    <div className=''>
                                        <div className={`font-bold text-[22px] ${nightMode == "true" ? `text-white`:``}`}>{country.name.common}</div>
                                    </div>
                                    <div className='text-[16px] tracking-wide flex flex-col gap-2 text-slate-500'>

                                        <div className='font-light'><span className='font-medium'>Population:</span> {country.population}</div>
                                        <div className='font-light'><span className='font-medium'>Region:</span> {country.region}</div>
                                        <div className='font-light'><span className='font-medium'>Sub Region:</span> {country.subregion}</div>
                                        <div className='font-light'><span className='font-medium'>Capital:</span> {country.capital}</div>
                                        <div className='font-light'><span className='font-medium'>Top Level Domain:</span> {country.tld[0]}</div>

                                        <div className='font-light'>
                                            <span className='font-medium'>Currencies:</span>
                                            <span> {Object.values(country.currencies).map(currencyValue => currencyValue.name).join(', ')}</span>
                                        </div>

                                        <div className='font-light'>
                                            <span className='font-medium'>Languages:</span>
                                            <span> {Object.values(country.languages).join(', ')}</span>
                                        </div>

                                    </div>
                                </div>
                                
                                <img className=' w-[50px]' src={country.flags.svg} alt="" />
                            </div>
                            <div className='h-full flex flex-col gap-5 items-center'>
                                <div className={`w-[120px] px-4 py-2 text-center rounded-[5px] font-medium ${nightMode == "true" ? `text-white`:` text-black border-slate-300 `}`}>Borders</div>
                                <div className=' w-[120px] flex flex-col gap-2 max-h-[100%] overflow-x-scroll '>
                                    {
                                        country.borders ? data.map((element, key1)=> {
                                            const shortName = element.cca3
                                            const fullName = element.name.common
                                            return(
                                                country.borders.map((border, key2)=> {
                                                    return(
                                                        border == shortName ? <Link to={`/Home/CountryDetails/${theme}/${key1}`} className={` w-[120px] px-4 py-2 hover:bg-blue-500 hover:text-white transition-all rounded-[5px] font-light ${nightMode == "true" ? `bg-[#262627af]`:`bg-slate-100 text-slate-400 `}`}>{fullName}</Link> : null
                                                    )
                                                })
                                            )
                                        }) : <div className={`px-4 py-2 font-light rounded-[5px] ${nightMode == "true" ? `bg-[#262627af]`:`bg-slate-100 text-slate-400 `}`}>no country</div>
                                    }
                                </div>
                        
                            </div>
                        </div>
                        
                    </div>
                    :
                    "Loading..."
                }
            </div>
        </div>
    );
}
export default CountryDetails;