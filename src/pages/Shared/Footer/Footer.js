import React from 'react';

const Footer = () => {
    const today =  new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4'>
             <p>Copyright © {year} | Photo Galleria | All rights reserved</p>
        </footer>
    );
};

export default Footer;