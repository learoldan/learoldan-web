import { useTranslations } from 'next-intl'

export function Footer() {
    const t = useTranslations('footer')
    return (
        <footer className='border-t border-border py-8 px-6'>
            <div className='max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
                <span className='font-mono text-xs text-muted'>
                    © {new Date().getFullYear()} Leandro Roldán
                </span>
                <span className='font-mono text-xs text-muted'>
                    {t('madeWith')}
                </span>
            </div>
        </footer>
    )
}
