import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';

const Menu = () => {
    return (
        <div className='container-menu'>
            <Link to='/' className='button'>
                <FaArrowLeft size={20} color='#65a300' />
                 Voltar ao Início
            </Link>
        </div>
    )
}

export default Menu;