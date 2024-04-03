import React from "react";

export default function CoinStats2({ data }) {
    return (
        <div className="max-w-md mx-auto bg-blue-500 rounded-lg shadow-md overflow-hidden">
            <div className="px-4 py-2 bg-white text-gray-900">
                <h2 className="text-lg font-semibold">Crypto Stats</h2>
            </div>
            <ul className="divide-x divide-white">
                {data.map((item) => {
                    return(
                    <li className="px-4 py-3 flex justify-between items-center">
                        <span className="text-white">{item.title}</span>
                        <span className="text-white font-semibold">{item.value}</span>
                    </li>
                    )
                })}
                {/* <li className="px-4 py-3 flex justify-between items-center">
          <span className="text-white">24h Change</span>
          <span className="text-white font-semibold">+5.23%</span>
        </li>
        <li className="px-4 py-3 flex justify-between items-center">
          <span className="text-white">Volume (24h)</span>
          <span className="text-white font-semibold">$100,000,000</span>
        </li> */}
            </ul>
        </div>
    );
}
