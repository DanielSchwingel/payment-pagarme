import React from 'react';

import logoPagarme from '../../assets/logo_pagarme.svg';

import './styles.css';

const Header = (props) => {
    return (
        <div className='container-header'>
            <h1>{props.title}</h1>
            <img src={logoPagarme} alt='Logo Pagar.me'/>
        </div>
    );
};

export default Header;