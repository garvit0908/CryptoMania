import React ,{useEffect, useState} from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import {Col ,Row,Typography,Select} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

// bhaiiiiiiiii sahab ye kya error hai matlab coinID me nhi chlra pr coinId me chl gyaaa matlab kuch bhiiiiiiiii

import { useGetCryptoDetailsQuery } from '../services/CryptoApi'

const {Title,Text} = Typography;
const{Option}=Select;

const CryptoDetails = () => {
  //useParam =>extract parameter from url..
  const {coinId} =useParams();
  console.log(coinId)
  const [timePeriod,setTimePeriod]=useState('7d')
  const {data,isFetching}=useGetCryptoDetailsQuery(coinId)
  // const [cryptoDetails,setCryptoDetails]=useState([])

  // useEffect(()=>{
  //   const fetchCryptosDetails= async() =>{
  //     const cryptoDetails = await data
  //     setCryptoDetails(cryptoDetails?.data?.coin)
  //   }
  // },[])
  console.log(data)
  console.log(data?.data?.coin)

  const cryptoDetails=data?.data?.coin

  // setCryptoDetails(data?.data?.coin)

  if (isFetching) return 'loading...'  

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  // console.log(cryptoDetails)




  // const cryptoDetails = data?.data?.coin;

  // if (isFetching) return 'loading...'
  // console.log(cryptoDetails)

  // {cryptoDetails.map((detail) => {
  //   console.log(detail);
  // })}
  

  return (
    <div>
      CryptoDetails {coinId}
    </div>
  )
}

export default CryptoDetails
