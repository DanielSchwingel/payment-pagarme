import React, { useState } from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import './styles.css';
import api_payment from '../../services/api_payment';

const Sell = ( ) => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [codeVerification, setCodeVerification] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const reponse = await api_payment.post('/',  )
        
    }

    return (
        <div className="box">
            <Header title='Vender com'/>
            <Menu />
            <div className='container-form'>
                <form onSubmit={handleSubmit}>
                    <h2>Dados do cartão:</h2>
                    <div className='field'>
                        <label htmlFor="name">Nome do titular</label>
                        <input 
                            type="text"
                            id="name"
                            onChange={e => (setName(e.target.value))}
                        />
                    </div>
                        <div className='field'>
                        <label htmlFor="card-number">Número do cartão</label>
                        <input 
                            type="text"
                            id="card-number"
                            onChange={e => (setCardNumber(e.target.value))}
                        />
                    </div>
                    <div className='input-group'>
                        <div className='field'>
                            <label htmlFor="expiration-date">Mês/Ano</label>
                            <input 
                                type="text"
                                id="expiration-date"
                                onChange={e => (setExpirationDate(e.target.value))}
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor="code-verification">CVV</label>
                            <input 
                                type="text"
                                id="code-verification"
                                onChange={e => (setCodeVerification(e.target.value))}
                            />
                        </div>
                    </div>

                    <button type="submit">
                        CONFIRMAR
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
};

export default Sell;
