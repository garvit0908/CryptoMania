import { useState, useEffect } from "react";

const useCryptoNews = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '63ae627465mshe17c2c73a60df7dp1e24cbjsn5fb8408a7866',
                'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(response => setNews(response.data))
            .catch(err => console.error(err));
    }, [])
    console.log(news)
    return news
}

export default useCryptoNews