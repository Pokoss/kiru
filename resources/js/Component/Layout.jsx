import React from 'react'
import NavbarHome from './NavbarHome';
import Footer from './Footer';


export default function Layout({ children }) {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    return (
        <div>
            <NavbarHome />

            <main className='min-h-screen'>
                {children}
            </main>

            <Footer />

        </div>
    )
}
