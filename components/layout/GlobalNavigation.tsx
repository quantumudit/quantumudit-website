'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GlobalNavigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navigation links for the Brand Site
    const navLinks = [
        { href: '/services', label: 'Services' },
        { href: '/training', label: 'Training' },
        { href: '/resources', label: 'Resources' },
        { href: '/blog', label: 'Blog' },
    ];

    // Detect scroll for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-montserrat"
                    >
                        QuantumUdit
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Button asChild variant="default" className="ml-4 bg-quantum-blue hover:bg-quantum-blue/90 text-white">
                            <Link href="/portfolio">
                                View Portfolio
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 dark:text-gray-300"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-b-lg shadow-lg absolute left-0 right-0 top-20 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex flex-col space-y-2 p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-3 rounded-md text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/portfolio"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-3 rounded-md text-left text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-semibold"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
