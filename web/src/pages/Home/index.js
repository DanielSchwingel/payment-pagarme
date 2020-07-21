import React, { useEffect, useState } from 'react';

import api_payment from '../../services/api_payment';
import './styles.css';

const Home = () => {
    const [transactions, setTransactions] = useState([]);

    async function getPayments(){
        const response = await api_payment.get('/');
        setTransactions(response.data);
    }

    useEffect(()=>{
        getPayments()
    },[]);
    return (
        <div className='box'>
            <h1>Pagamentos</h1>
            <p>Lista de pagamentos efetuados:</p>
        </div>
    )
}

export default Home;