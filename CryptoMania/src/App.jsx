import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import CryptoCurrencies from './Components/CryptoCurrencies'
import Exchanges from './Components/Exchanges'
import News from './Components/CryptoNews'
import Navbar from './Components/Navbar'
import NavExample from './Components/NavExample'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import CryptoNews from './Components/CryptoNews'
// import useAllCoinInfo from './Hooks/useAllCoinInfi'
import CryptoDetails from './Components/CryptoDetails'
//There will be hell lot of components and u have to plan that
function App() {
  // const {data,loading,error}=useAllCoinInfo()
  return (
    <>
    <div>
    </div>
    <div>
      <BrowserRouter>
      {/* Bhai ye bol rhe isko iske andr hi rkho pta nhi kyu.....*/}
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cryptocurrencies" element={<CryptoCurrencies/>}/>
          <Route path="/cryptonews" element={<CryptoNews/>}/>
          <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
          <Route path="/exchanges" element={<Exchanges/>}/>
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
