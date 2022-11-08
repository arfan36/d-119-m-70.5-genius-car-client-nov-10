import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { ProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    // google login
    const handleGoogleLogin = () => {
        ProviderLogin(googleProvider).then((result) => {
            const user = result.user;
            setAuthToken(user);

        }).catch((err) => {
            console.error('err', err);
        });
    };
    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleLogin} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;