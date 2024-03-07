import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CountryDetails = () => {

    const { id } = useParams()
    const [data, setData] = useState([])
    const country = data[id]

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, []);

    return (
        <div>
            {
                data.length > 0 ? country.name.common : "loading"
            }
        </div>
    );
}

export default CountryDetails;