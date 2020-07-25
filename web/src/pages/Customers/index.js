import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import api_payment from '../../services/api_payment';

const Customer = () => {
    const [customers, setCustomers] = useState([]);
    
    async function getCustomers(){
        const response = await api_payment.get('/customers');
        setCustomers(response.data);
    }

    useEffect(()=>{
        getCustomers();
    },[customers])

    return (
        <div className='box'>
            <Header title='Clientes com '/>
            <Menu />
            <p>Lista de clientes já cadastrados:</p>
            <table cellpadding='8px' cellSpacing='0px' >
                <thead>
                    <tr>
                        <th>ID Pagar.me</th>
                        <th>ID Externo</th>
                        <th>Cliente</th>
                        <th>CPF</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {customers.map(customer => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.external_id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.documents[0].number}</td>
                        <td>{customer.email}</td>
                        <td>asdasds</td>
                    </tr>
                    )
                )}
                </tbody>
            </table>
            <hr/>
            <Footer />
        </div>
    )
}

export default Customer;