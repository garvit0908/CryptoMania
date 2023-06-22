import React from 'react'
import '../App.css'
import {Select ,typography,Row,Col,Avatar,Card, Typography} from 'antd'
import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi' 

const {Text,Title}=Typography
const {Option}=Select

const News = ({simplified}) => {

  const count = simplified ? 10 :100
  const{data:cryptoNews}=useGetCryptoNewsQuery({newsCatagory:'Cryptocurrency' ,count})
  console.log(cryptoNews)
  

  return (
    <div>
      news
    </div>
    
  )
}

export default News
