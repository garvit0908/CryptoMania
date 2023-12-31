import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/CryptoApi'
// import '/Cryptocurrencies.css'
import '../App.css'

const Cryptocurrencies = ({ simplified }) => {

  const count = simplified ? 8: 20;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchterm, setSearchterm] = useState('')
  // const {cryptos,setCryptos}=useState(cryptosList?.data?.coins)
  useEffect(() => {
    const fetchCryptos = async () => {
      const data = await cryptosList;
      setCryptos(data?.data?.coins || []);
    };

    fetchCryptos();
  }, [cryptosList]);

  useEffect(()=>{
    const filterData=cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchterm.toLowerCase()));
    setCryptos(filterData);
  },[searchterm])
  // console.log(cryptos)
  if (isFetching) return 'loading...'
  // console.log(cryptos)
  return (
    <>
      {!simplified &&(

      <div className='search-crypto'>
        <Input type="text" placeholder='Search Cryptocurrency' onChange={(e) => { setSearchterm(e.target.value) }} />
      </div>
      )}


      <div className="crypto-container">
        <Row gutter={[22, 22]} className="crypto-card-container">
          {cryptos.map((currency) => (
            <Col xs={15} sm={12} lg={6} className="crypto-card" key={currency.uuid}>

              {console.log(currency.uuid)}
              {/* {console.log(currency)} */}
              {/* {console.log("heelo")} */}
              {/* i dont know ye cryptodetails ka url ksee bnaa */}
              {/* ab know ho gya bas coinID n chlra hai */}
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className="crypto-image" sizes='10px' src={currency.iconUrl} alt={currency.name} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {currency.change}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>

    </>
  )
}

export default Cryptocurrencies
