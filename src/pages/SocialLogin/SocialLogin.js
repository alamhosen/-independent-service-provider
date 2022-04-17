import React from 'react';
import google from '../../images/social/google.png'
import github from '../../images/social/github.png'

const SocialLogin = () => {
    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <div className='px-2'>OR</div>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>

            <div>
                <button className='btn btn-primary mx-auto d-block w-50 my-3'>
                    Google Login
                </button>
                <button className='btn btn-primary mx-auto d-block w-50 my-3'>
                    Github Login
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;