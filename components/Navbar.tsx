'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                            HV
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-800/50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/resume.pdf" // Placeholder for resume
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:scale-105"
                            >
                                <FileText className="w-4 h-4" />
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none"
                        >
                            {isOpen ? <X className="block w-6 h-6" /> : <Menu className="block w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800/50"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            className="flex items-center gap-2 w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800/50"
                        >
                            <FileText className="w-4 h-4" />
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
