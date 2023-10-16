import React, { useEffect, useState } from 'react';

const Exchanges = () => {
  const [data, setData] = useState([]);

    const fetchData = async () => {
      const url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '63ae627465mshe17c2c73a60df7dp1e24cbjsn5fb8408a7866',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options)
        .then(res => res.json())
        .then(d => {
          setData(d.data.exchanges);
          console.log(d.data.exchanges[0].numberOfMarkets);
        })
      } catch (error) {
        console.error(error);
      }
    };

  console.log(data);
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
    
    <div>
      {/* {data.map(market => (
        <div key={market.id}>{market.exchange.name}</div>
      ))} */}
    </div>
  );
}

export default Exchanges;
