import { useState, useEffect } from "react";
//ye ek particular coin ki details add kregaaaaa.........

const useCoinDetails = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const url =
        "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "63ae627465mshe17c2c73a60df7dp1e24cbjsn5fb8408a7866",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
    };
    fetch(url, options)
    .then((response) => response.json())
    .then((result) => setData(result.data))
    .catch((error) => console.error(error));
    },[])
    return data
};

export default useCoinDetails;
