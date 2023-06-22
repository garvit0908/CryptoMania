import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '63ae627465mshe17c2c73a60df7dp1e24cbjsn5fb8408a7866',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoNewsHeaders})



// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {
//       safeSearch: 'Off',
//       textFormat: 'Raw'
//     },
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': '63ae627465mshe17c2c73a60df7dp1e24cbjsn5fb8408a7866',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };

export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptosNews :builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

// How to get url string

export const {
    useGetCryptoNewsQuery
}=cryptoNewsApi