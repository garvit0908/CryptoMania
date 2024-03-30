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


//There will be hell lot of components and u have to plan that


function App() {

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cryptocurrencies" element={<CryptoCurrencies/>}/>
          <Route path="/cryptonews" element={<CryptoNews/>}/>
          <Route path="/exchanges" element={<Exchanges/>}/>
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
