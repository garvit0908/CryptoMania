import React from 'react'
import { useParams } from 'react-router-dom'
import useCoinDetails from '../Hooks/useCoinDetails';
import millify from 'millify';

import  CoinStats2 from '../AdditonalComponents/CoinStats2';
//Now i know the coinId whose data is to be fetched lets do it.....

function CryptoDetails() {
    const {coinId} =useParams();
    console.log(coinId)
    const data=useCoinDetails()
    console.log(data)
    //ek array banana hi jyda suitable hoga most probably....
    const stats = [
      { title: 'Price to USD', value: `$ ${data?.coin?.price && millify(data?.coin?.price)}`},
      { title: 'Rank', value: data?.coin?.rank,  },
      { title: '24h Volume', value: `$ ${data?.coin?.volume && millify(data?.coin?.volume)}`  },
      { title: 'Market Cap', value: `$ ${data?.coin?.marketCap && millify(data?.coin?.marketCap)}` },
      { title: 'All-time-high(daily avg.)', value: `$ ${data?.coin?.allTimeHigh?.price && millify(data?.coin?.allTimeHigh?.coin?.price)}` },
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: data?.coin?.numberOfMarkets },
      { title: 'Number Of Exchanges', value: data?.coin?.numberOfExchanges},
      { title: 'Aprroved Supply', value: data?.coin?.supply?.confirmed},
      { title: 'Total Supply', value: `$ ${data?.coin?.supply?.total && millify(data?.coin?.supply?.total)}`},
      { title: 'Circulating Supply', value: `$ ${data?.coin?.supply?.circulating && millify(data?.coin?.supply?.circulating)}`},
    ];
  return (
    <div className='flex flex-row'>
  {/* <CoinStats data={data}/> */}
  <CoinStats2 data={stats}/>
  <CoinStats2 data={genericStats}/>
</div>

  )
}

export default CryptoDetails
