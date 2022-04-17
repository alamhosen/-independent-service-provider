import React from 'react';
import notFound from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center my-4'>404 Not Found</h2>
            <img className='w-50 mx-auto d-block rounded mb-5' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;