import React, { useEffect, useState } from 'react';

import api_payment from '../../services/api_payment';
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';


const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    async function getPayments(){
        const response = await api_payment.get('/transactions');
        setTransactions(response.data);
    }

    useEffect(()=>{
        getPayments();
    },[]);

    return (
        <div className='box'>
            <Header title='Transações com ' />
            <Menu />
            <p>Lista de transações efetuadas:</p>
            <table cellpadding='8px' cellSpacing='0px' >
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>E-mail</th>
                        <th>Valor (R$)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.authorization_code}>
                        <td>{transaction.customer.name}</td>
                        <td>{transaction.customer.email}</td>
                        <td>{Number(transaction.amount) / 100}</td>
                        <td>{transaction.status === 'refused' ? 'Recusado' : 'Autorizado'}</td>
                    </tr>
                    )
                )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Todos as transações foram feitas em ambiente de teste!</td>
                    </tr>
                </tfoot>
            </table>
            <Footer />
        </div>
    )
}

export default Transactions;