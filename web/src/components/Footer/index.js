import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './styles.css';

const Footer = () => {
    return(
        <div className='container-footer'>
            <a href='https://www.linkedin.com/in/daniel-filipe-schwingel-a6541515b/' target='about_blank'> 
                <FaLinkedin size={25} color='#0e76a8'/>
            </a>
            <a href='https://github.com/DanielSchwingel' target='about_blank'> 
                <FaGithub size={25} color='#000'/>
            </a>
        </div>
    )
}

export default Footer;