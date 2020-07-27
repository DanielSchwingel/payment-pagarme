import React from 'react';
import { FaChartBar, FaRegCreditCard, FaUsers } from 'react-icons/fa'
import { Link }from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

const Home = ( ) => {
    return (
        <div className='box'>
            <Header title='Integração com o'/>
            <div className='card-panel'>
                <Link className='card' to='/vendas'>
                    <FaChartBar size={28} color='#FFF'/> 
                    <p>TRANSAÇÕES</p>       
                </Link>
                <Link className='card' to='/vender'>
                    <FaRegCreditCard size={28} color='#FFF'/>  
                    <p>VENDER</p>      
                </Link>
                <Link className='card' to='/clientes'>
                    <FaUsers size={28} color='#FFF'/>  
                    <p>CLIENTES</p>      
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;