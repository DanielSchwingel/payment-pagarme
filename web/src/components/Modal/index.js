import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'

import './styles.css';

const ModalCustomer = ({onClose}) => {
    const [name, setName] = useState('');	
    const [email, setEmail] = useState('');	
    const [cpf, setCpf] = useState('');	
    const [phone, setPhone] = useState('');	

    function handleSubmit(){
        alert(`${name}, ${email},${cpf},${phone}`);
    }

    return(
        <div className="modal">
            <div className="container">
                <div className="header">
                    <h4>Teste de modal</h4>
                    <FaTimes size={18} color='#000' onClick={onClose}/>
                </div>
                <form>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder='Informe o nome do cliente'
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder='Informe o e-mail do cliente' 
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <div className="input-group">
                        <label htmlFor="cpf">CPF</label>
                        <input 
                            type="text" 
                            id="CPF" 
                            placeholder='000.000.000-00' 
                            value={cpf}
                            onChange={e => setCpf(e.target.value)} 
                        />
                        <label htmlFor="phone">Telefone</label>
                        <input 
                            type="text" 
                            id="phone" 
                            placeholder='Informe o telefone do cliente' 
                            value={phone}
                            onChange={e => setPhone(e.target.value)} 
                        />
                    </div>
                    <p onClick={handleSubmit}>adsasdasdsasad</p>
                </form>
            </div>
        </div>
    );
}

export default ModalCustomer;