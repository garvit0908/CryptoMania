import React from 'react'
import useCryptoNews from '../Hooks/useCryptoNews'
import NewsCard from '../AdditonalComponents/NewsCard'

function CryptoNews() {
  const news = useCryptoNews();
  //i want  to filter the news on basis of description
  const filteredNews = news.filter(item => item.description !== "");
  return (
    <div className='grid grid-cols-4 gap-4 m-4'>
      {
        filteredNews.map((news, index) => (
          <div key={index} className="m-4 p-4 border border-gray-200 rounded-lg">
          <NewsCard news={news}/>
          </div>
        ))
      }
    </div>
  )
}

export default CryptoNews
