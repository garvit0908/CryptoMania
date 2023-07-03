// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const cryptoCoinDetailsApiHeaders={
//     'X-RapidAPI-Key': '63ae627465mshe17c2c73a60df7dp1e24cbjsn5fb8408a7866',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// }

// const baseUrl='https://coinranking1.p.rapidapi.com/coin'

// const createRequest =(url)=>({url,headers:cryptoCoinDetailsApiHeaders})

// export const cryptoApi =createApi({
//     reducerPath:'cryptoCoinDetailsApi',
//     baseQuery:fetchBaseQuery({baseUrl}),
//     endpoints:(builder)=>({
//         // getCryptos :builder.query({
//         //     query:(count)=> createRequest(`/coins?limit=${count}`)
//         // }),
//         getCryptoDetails:builder.query({
//             query:(coinID)=> createRequest(`/coin/${coinID}`)
//         }),
//     })
// });

// export const {
//     useGetCrytpoDetailsApi
// }=cryptoCoinDetailsApi


