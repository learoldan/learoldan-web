import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { routing } from '@/i18n/routing'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import '../globals.css'

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    const messages = await getMessages()

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <title>Leandro Roldán — Fullstack Developer</title>
                <meta
                    name='description'
                    content='Fullstack Developer portfolio'
                />
            </head>
            <body className='min-h-screen bg-background text-foreground'>
                <Script id='theme-init' strategy='beforeInteractive'>{`
                    try {
                        var t = localStorage.getItem('theme');
                        var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
                        if (t === 'dark' || (!t && d)) document.documentElement.classList.add('dark');
                    } catch(e) {}
                `}</Script>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
