import React ,{useEffect, useState} from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import {Col ,Row,Typography,Select} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery } from '../services/CryptoApi'

const {Title,Text} = Typography;
const{Option}=Select;

const CryptoDetails = () => {
  //useParam =>extract parameter from url..
  const {coinID} =useParams();
  console.log(coinID)
  const [timePeriod,setTimePeriod]=useState('7d')
  const {data,isFetching}=useGetCryptoDetailsQuery(coinID)
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return 'loading...'
  console.log(cryptoDetails)


  return (
    <div>
      CryptoDetails {coinID}
    </div>
  )
}

export default CryptoDetails
