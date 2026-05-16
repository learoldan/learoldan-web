import { useTranslations } from 'next-intl'

export function About() {
    const t = useTranslations('about')
    const educationItems = t.raw('educationItems') as Array<{
        degree: string
        institution: string
        period: string
    }>
    const languageItems = t.raw('languageItems') as Array<{
        lang: string
        level: string
    }>

    return (
        <section id='about' className='py-24 px-6 max-w-5xl mx-auto'>
            <h2 className='font-mono text-xs text-muted uppercase tracking-[0.2em] mb-16'>
                {t('title')}
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-[1fr_320px] gap-16'>
                <div className='space-y-5'>
                    <p className='font-sans text-base text-foreground/70 leading-relaxed'>
                        {t('p1')}
                    </p>
                    <p className='font-sans text-base text-foreground/70 leading-relaxed'>
                        {t('p2')}
                    </p>
                    <p className='font-sans text-base text-foreground/70 leading-relaxed'>
                        {t('p3')}
                    </p>
                </div>

                <div className='space-y-10'>
                    <div>
                        <h3 className='font-mono text-xs text-muted uppercase tracking-[0.2em] mb-5'>
                            {t('education')}
                        </h3>
                        <div className='space-y-5'>
                            {educationItems.map((item, i) => (
                                <div key={i}>
                                    <p className='font-mono text-xs text-muted'>
                                        {item.period}
                                    </p>
                                    <p className='font-sans text-sm font-medium text-foreground mt-0.5'>
                                        {item.degree}
                                    </p>
                                    <p className='font-sans text-xs text-muted mt-0.5'>
                                        {item.institution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className='font-mono text-xs text-muted uppercase tracking-[0.2em] mb-5'>
                            {t('languages')}
                        </h3>
                        <div className='space-y-3'>
                            {languageItems.map((item, i) => (
                                <div
                                    key={i}
                                    className='flex justify-between items-baseline'
                                >
                                    <span className='font-sans text-sm text-foreground'>
                                        {item.lang}
                                    </span>
                                    <span className='font-mono text-xs text-muted'>
                                        {item.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
