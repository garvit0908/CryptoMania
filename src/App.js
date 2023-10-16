import React from 'react'
import {Routes,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
// import 'antd/dist/antd.css';
// import './App.css'

import {Navbar,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News,CryptoChatbot} from './components'
// import Navbar from './components/Navbar'

const App = () => {
  return (
      <div className='app'>
        <div className='navbar'>
        {/* <h1>Heelo</h1> */}
            <Navbar/>
            {/* <Homepage/>  */}
        </div>
        <div className='main'>
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path='/homepage' Component={Homepage}/>
                {/* <Route exact path='/cryptochatbot' Component={CryptoChatbot}/> */}
                <Route exact path='/cryptocurrencies' Component={Cryptocurrencies}/>
                <Route exact path='//crypto/:coinId' Component={CryptoDetails}/>
                <Route exact path='/news' Component={News}/>
              </Routes>

            </div>

          </Layout>
            
        </div>
    </div>
  )
}

export default App
