import React from 'react'
import millify from 'millify'

function CryptoCards({ coin }) {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white relative">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{coin?.name}</div>
        <div class="absolute top-0 right-0 m-2">
          <img class="w-8 h-8" src={coin?.iconUrl} alt="Sunset in the mountains" />
        </div>
        <p class="text-gray-700 text-base">
          Price: {millify(coin?.price)}
        </p>
        <p class="text-gray-700 text-base">
          Market Cap: {millify(coin?.marketCap)}
        </p>
        <p class="text-gray-700 text-base">
          Daily Change: {coin?.change}%
        </p>
      </div>
      {/* <div class="hover:bg-gray-100 absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300"></div> */}
    </div>

  )
}

export default CryptoCards
