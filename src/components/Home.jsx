import React, { useState, useEffect } from 'react';
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
                        <div>{item.name.common}</div>
                    )
                }) : ""
            }
        </div>
    );
}

export default Home;
