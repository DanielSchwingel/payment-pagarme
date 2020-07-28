import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import ModalCustomer from '../../components/Modal/Customers';

import api_payment from '../../services/api_payment';

const Customer = () => {
    const [customers, setCustomers] = useState([]);
    const [id_customer, setIdCustomer] = useState(0);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    
    function openCustomer(id_customer){
        setIdCustomer(id_customer);
        setIsVisibleModal(true);
    }
    
    async function getCustomers(){
        const response = await api_payment.get('/customers');
        setCustomers(response.data);
    }
    
    useEffect(()=>{
        getCustomers();
    },[customers])


    return (
        <div className='box'>
            {isVisibleModal ? <ModalCustomer id={id_customer} onClose={() => setIsVisibleModal(false)}/> :  null}
            <Header title='Clientes com '/>
            <Menu />
            <div className="buttons-grid">
                <button onClick={()=> openCustomer(0)}>NOVO</button>
            </div>
            <p>Lista de clientes já cadastrados:</p>
            <table cellPadding='8px' cellSpacing='0px' >
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
                        <td><FaSearch size={18} color='#65a300' onClick={() => openCustomer(customer.id)}/></td>
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