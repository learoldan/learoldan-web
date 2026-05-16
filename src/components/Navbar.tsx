'use client'

import { useTranslations } from 'next-intl'
import { ThemeToggle } from './ThemeToggle'
import { LangToggle } from './LangToggle'
import { useEffect, useState } from 'react'

export function Navbar() {
    const t = useTranslations('nav')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    const navLinks = [
        { label: t('experience'), href: '#experience' },
        { label: t('skills'), href: '#skills' },
        { label: t('about'), href: '#about' },
        { label: t('contact'), href: '#contact' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-background/80 backdrop-blur-md border-b border-border'
                    : 'bg-transparent'
            }`}
        >
            <nav className='max-w-5xl mx-auto px-6 h-16 flex items-center justify-between'>
                <a
                    href='#'
                    className='font-mono text-sm font-medium text-foreground tracking-tight'
                >
                    learoldan.dev
                </a>

                <div className='hidden md:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className='font-sans text-sm text-foreground/60 hover:text-foreground transition-colors'
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className='flex items-center gap-3'>
                    <LangToggle />
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
