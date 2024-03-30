import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import CryptoCurrencies from './Components/CryptoCurrencies.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//        <Route path="/crypto-currencies" element={<CryptoCurrencies />} />
//     </Route>

//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
    {/* </RouterProvider> */}
    <App/>
  </React.StrictMode>,
)
