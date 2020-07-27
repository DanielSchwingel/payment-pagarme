import React, { useState } from 'react';
import { FaTimes, FaCheck, FaArrowLeft } from 'react-icons/fa'

import './styles.css';

const ModalCustomer = ({onClose}) => {
    const [name, setName] = useState('');	
    const [email, setEmail] = useState('');	
    const [cpf, setCpf] = useState('');	
    const [phone, setPhone] = useState('');	

    function handleSubmit(e){
        e.preventDefault();
        alert(`${name}, ${email},${cpf},${phone}`);
    }

    return(
        <div className="modal">
            <div className="container">
                <div className="header">
                    <h4>Cadastro de cliente</h4>
                    <FaTimes size={18} color='#000' onClick={onClose}/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Nome</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder='Informe o nome do cliente'
                            value={name}
                            onChange={e => setName(e.target.value)} 
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="text" 
                            id="email" 
                            placeholder='Informe o e-mail do cliente' 
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <div className="field">
                            <label htmlFor="cpf">CPF</label>
                            <input 
                                type="text" 
                                id="cpf" 
                                placeholder='000.000.000-00' 
                                value={cpf}
                                onChange={e => setCpf(e.target.value)} 
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="phone">Telefone</label>
                            <input 
                                type="text" 
                                id="phone" 
                                placeholder='Informe o telefone do cliente' 
                                value={phone}
                                onChange={e => setPhone(e.target.value)} 
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className="buttons-form">
                        <div className="button-cancel" onClick={onClose}>
                            <FaArrowLeft size={18} color='red' /> CANCELAR
                        </div>
                        <button className="button-save">
                            <FaCheck size={18} color='#FFF' onClick={onClose}/> SALVAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalCustomer;