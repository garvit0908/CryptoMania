import React from 'react'
import useAllCoinInfo from '../Hooks/useAllCoinInfi'
import CryptoCards from '../AdditonalComponents/CryptoCards'


function CryptoCurrencies() {
  const data=useAllCoinInfo()
  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {data?.coins?.map((coin, index) => (
        <CryptoCards coin={coin} />
      ))}
    </div>
  );
}

export default CryptoCurrencies
