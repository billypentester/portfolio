'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const navData = {
        title: 'billypentester',
        links: [
            { title: 'Experience', url: '/experience', isBut: false },
            { title: 'Projects', url: '/projects', isBut: false },
            { title: 'Education', url: '/education', isBut: false },
            { title: 'Blogs', url: '/blogs', isBut: false },
            { title: 'Resume', url: '/docs/resume.pdf', isBut: true }
        ]
    }

    return (
        <div className="custom-container">
            <div className="flex flex-col md:items-center md:justify-between md:flex-row bg-base backdrop-blur-2xl rounded-full my-5 px-3 shadow-sm shadow-accent">
                <div className="flex flex-row items-center justify-between p-4">
                    <Link href="/" className="text-lg font-semibold tracking-widest text-secondary uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">{navData.title}</Link>
                    <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setIsOpen(!isOpen)}>
                        <svg viewBox="0 0 20 20" className="w-6 h-6 fill-current text-secondary" fill="none">
                            {
                                isOpen ?
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                :
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            }
                        </svg>
                    </button>
                </div>
                <nav className={`${isOpen ? 'flex' : 'hidden'} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                    {
                        navData.links.map((link, index) => { 
                            return (
                                <Link key={index} className="px-4 py-3 mt-2 text-sm font-semibold rounded-lg text-neutral  md:mt-0 md:ml-4 hover:text-white hover:rounded-full focus:text-gray-900 hover:bg-accent hover:shadow-sm hover:transition hover:delay-75 hover:ease-in-out focus:outline-none focus:shadow-outline" href={link.url} target={link.isBut ? '_blank' : '_self' } rel="noopener noreferrer">{link.title}</Link>
                            )
                        })
                    }
                </nav>
            </div>
        </div>
    );
}
