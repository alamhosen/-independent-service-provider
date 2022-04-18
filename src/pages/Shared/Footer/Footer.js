import React from 'react';
import facebook from '../../../images/social icons/facebook.png'
import twitter from '../../../images/social icons/twitter.png'
import whatsapp from '../../../images/social icons/whatsapp.png'
import instragram from '../../../images/social icons/instagram.png'

const Footer = () => {
    const today =  new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4'>
            <p className='mb-3 fs-5'>Get me in touch</p>
            <div className='mb-3'>
                <a href="https://facebook.com" target='_blank'><img className='mx-1' src={facebook}  alt="" /></a>
                <a href="https://twitter.com/" target='_blank'><img className='mx-1' src={twitter} alt="" /></a>
                <a href="https://www.whatsapp.com/" target='_blank'><img className='mx-1' src={whatsapp} alt="" /></a>
                <a href="https://www.instagram.com/?hl=en" target='_blank'><img className='mx-1' src={instragram} alt="" /></a>
                
            </div>
             <p>Copyright © {year} | Photo Galleria | All rights reserved</p>
        </footer>
    );
};

export default Footer;