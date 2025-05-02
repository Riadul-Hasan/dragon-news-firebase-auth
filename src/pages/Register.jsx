import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../components/provider/AuthProvider';

const Register = () => {
    const [nameError, setNameError] = useState('')
    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.length < 4) {
            setNameError("Name should be more that 5 characters!")
            return;
        }
        else {
            setNameError("")
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ name, photo, email, password })
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate("/")
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user)
                    })



                console.log(user)
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='flex justify-center'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                <h2 className='text-2xl font-semibold text-center pt-8'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label text-black">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" />
                        {
                            nameError && <p className='text-xs text-red-500 font-semibold'>{nameError}</p>
                        }
                        {/* Photo Url */}
                        <label className="label text-black">Photo Url</label>
                        <input name='photo' type="text" className="input" placeholder="Url" />
                        {/* Email */}
                        <label className="label text-black">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label text-black">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-primary mt-4">Login</button>
                        <p className='text-center py-2'>Already Have An Account ? <Link to="/auth/login" className='text-secondary font-semibold '>Login Now</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;