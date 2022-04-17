import React from 'react';
import google from '../../images/social/google.png'
import github from '../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || errorGit) {
        errorElement = <div>
           <p className='text-danger'>Error: {error?.message} {errorGit?.message}</p>
         </div>
     }

     if(user || userGit){
        navigate('/home')
    }

    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <div className='px-2'>OR</div>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary mx-auto d-block w-50 my-3'>
                    <img className='mx-2' src={google} alt="" />
                    Google Login
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary mx-auto d-block w-50 my-3'>
                    <img className='mx-2' src={github} alt="" />
                    Github Login
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;