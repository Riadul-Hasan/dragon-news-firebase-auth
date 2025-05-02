
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthenticationLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            {/* <h1>Authentication Layout</h1> */}
            <header className='container mx-auto py-4'>
                <Navbar></Navbar>
            </header>

            <main className='container mx-auto py-16'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthenticationLayout;