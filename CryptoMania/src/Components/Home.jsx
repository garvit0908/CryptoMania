import React from 'react'
import { useState } from 'react';
import useAllCoinInfo from '../Hooks/useAllCoinInfi'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import LiveEditor from '../AdditonalComponents/LiveEditor';

function Home() {
  const[stats,setStats]=useState([])
  const data=useAllCoinInfo()
  // console.log(data)
  // console.log(data.stats)
  // setStats(data?.stats)
  // console.log(data?.stats)

  return (
    <div className='flex flex-row'>
    <div><LiveEditor data={data}/></div>
    <div><LiveEditor data={data}/></div>
    <div><LiveEditor data={data}/></div>
    </div>
  )
}

export default Home
