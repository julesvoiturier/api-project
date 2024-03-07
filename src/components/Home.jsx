import React, { useState, useEffect, createContext  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const [ data, setData ] = useState()

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, []);

    return (
        <div>
            {
                data ? data.map((item, key) => {
                    return(
                        <Link key={key} to={`/CountryDetails/${key}`}>{item.name.common}</Link>
                    )
                }) : ""
            }
        </div>
    );
}

export default Home;