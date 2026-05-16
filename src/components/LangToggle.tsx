'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export function LangToggle() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const toggleLocale = () => {
        const nextLocale = locale === 'es' ? 'en' : 'es'
        // Replace the locale segment in the path
        const segments = pathname.split('/')
        segments[1] = nextLocale
        router.push(segments.join('/') || '/')
    }

    return (
        <button
            onClick={toggleLocale}
            className='text-sm font-sans text-foreground/70 hover:text-foreground transition-colors tracking-wider uppercase'
        >
            {locale === 'es' ? 'EN' : 'ES'}
        </button>
    )
}
