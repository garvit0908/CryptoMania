import React from 'react'
import useAllCoinInfo from '../Hooks/useAllCoinInfo'
import CryptoCards from '../AdditonalComponents/CryptoCards'
import { Link } from 'react-router-dom'


function CryptoCurrencies() {
  const data=useAllCoinInfo()
  return (
    <div className="grid grid-cols-4 gap-4 m-4" >
      {data?.coins?.map((coin, index) => (
      <div>
      <Link to={`/crypto/${coin.uuid}`}>
        <CryptoCards coin={coin} />
      </Link>
      </div>
      ))}
    </div>
  );
}

export default CryptoCurrencies
