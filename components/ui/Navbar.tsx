'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { Logo } from './Logo';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-6'}`}>
            <div className="container-width flex items-center justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
                    <a href="#services" onClick={(e) => scrollToSection(e, 'skills')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                        <Button variant="primary" size="sm">Get in Touch</Button>
                    </a>
                </nav>
            </div>
        </header>
    );
}
