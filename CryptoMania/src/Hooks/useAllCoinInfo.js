import { useState, useEffect } from "react";

const useAllCoinInfo = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '63ae627465mshe17c2c73a60df7dp1e24cbjsn5fb8408a7866',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        fetch(url,options)
        .then(response => response.json())
        .then(result => setData(result.data))
        .catch(error => console.error(error))
    }, [])
    console.log(data);
    return data;
}

export default useAllCoinInfo;