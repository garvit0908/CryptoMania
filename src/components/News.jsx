import React, { useState,useEffect } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptosNewsQuery } from '../services/CryptoNewsApi';
import { Currency } from './Cryptocurrencies';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoList, isFetching } = useGetCryptosNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 6 : 12,
  });
  console.log(cryptoList);
  // console.log(cryptoList?.value);
  const demo =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
  const[news,setNews]=useState([])

  useEffect(() => {
    const fetchCryptos = async () => {
      const data = await cryptoList;
      setNews(cryptoList?.value || []);
    };

    fetchCryptos();
  }, [cryptoList]);

  console.log(news)
  if (isFetching) return 'loading...'

  return (
    <Row gutter={[24,24]}>
      {news.map((ne,i)=>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={ne.url} target=" blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{ne.name}</Title>
                <img style={{ maxHeight :'100px', maxWidth : '100px'  }}  src={ne?.image?.thumbnail?.contentUrl ||demo} />
              </div>
              <p>
              {ne.description.length > 100 ? `${ne.description.substring(0, 100)}...` : ne.description}
              </p>
            </a>
          </Card>
        </Col>

      ))}

    </Row>
  );
};

export default News;
