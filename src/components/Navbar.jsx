import React from 'react'
import {Button,Menu,Typography ,Avatar} from 'antd';
import {Link} from  'react-router-dom'
import {HomeOutlined ,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons';
import icon from '../images/logo.png'
import '../App.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
                <Link to="/homepage" >Cryptomania</Link>

            </Typography.Title>
            {/* <Button></Button> */}
        </div>

        <div className='nav-bar'>

        <Menu theme="dark">
          <Menu.Item icon ={<HomeOutlined/>}>
              <Link to ="/homepage">Home</Link>
           </Menu.Item>
           <Menu.Item icon ={<FundOutlined/>}>
              <Link to ="/cryptocurrencies">Cryptocurrencies</Link>
           </Menu.Item> 
           {/* <Menu.Item icon ={<MoneyCollectOutlined/>}>
              <Link to ="/cryptochatbot">ChatBot</Link>
           </Menu.Item>  */}
           <Menu.Item icon ={<BulbOutlined/>}>
              <Link to ="/news">News</Link>
           </Menu.Item>  
        </Menu>
        </div>
      
    </div>
  )
}

export default Navbar
  