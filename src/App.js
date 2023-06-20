import React from 'react'
import {Routes,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
// import 'antd/dist/antd.css';

import {Navbar,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News} from './components'
// import Navbar from './components/Navbar'

const App = () => {
  return (
      <div className='app'>
        <div className='navbar'>
        {/* <h1>Heelo</h1> */}
            <Navbar/>
        </div>
        <div className='main'>
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path='/exchanges' Component={Exchanges}/>
                <Route exact path='/cryptocurrencies' Component={Cryptocurrencies}/>
                <Route exact path='//crypto/:coinId' Component={CryptoDetails}/>
                <Route exact path='/news' Component={News}/>
                {/* <Route exact path='/exchanges' Component={Exchanges}/> */}
                   {/* <Exchanges/> */}
                {/* </Route> */}
{/* 
                <Route exact path='/cryptocurrencies'>
                   <Cryptocurrencies/>
                </Route>

                <Route exact path='/crypto/:coinId'>
                   <CryptoDetails/>
                </Route>

                <Route exact path='/news'>
                   <News/>
                </Route> */}

           
              </Routes>

            </div>

          </Layout>
            
        </div>
        <div className='footer' >
            <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
              Cryptomania<br/>
              All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
            </Space>
        </div>
    </div>
  )
}

export default App
