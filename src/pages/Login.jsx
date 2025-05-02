import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../components/provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("")
    const { signIn } = use(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                const errorCode = error.code;
                setError(errorCode)
            })
    }
    return (
        <div className='flex justify-center'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                <h2 className='text-2xl font-semibold text-center pt-8'>Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className='text-red-500 font-semibold text-xs'>{error}</p>
                        }
                        <button type='submit' className="btn btn-primary mt-4">Login</button>
                        <p className='text-center py-2'>Dont’t Have An Account ? <Link to="/auth/register" className='text-secondary font-semibold '>Register</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>


    );
};

export default Login;