import { useTranslations } from 'next-intl'

export function Experience() {
    const t = useTranslations('experience')
    const jobs = t.raw('jobs') as Array<{
        role: string
        company: string
        period: string
        description: string
        tech: string
    }>

    return (
        <section id='experience' className='py-24 px-6 max-w-5xl mx-auto'>
            <h2 className='font-mono text-xs text-muted uppercase tracking-[0.2em] mb-16'>
                {t('title')}
            </h2>

            <div className='space-y-0'>
                {jobs.map((job, i) => (
                    <div
                        key={i}
                        className='grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-t border-border'
                    >
                        <div>
                            <p className='font-mono text-xs text-muted'>
                                {job.period}
                            </p>
                            <p className='font-sans text-sm font-medium text-foreground mt-1'>
                                {job.company}
                            </p>
                        </div>
                        <div>
                            <h3 className='font-mono text-lg text-foreground font-medium mb-3'>
                                {job.role}
                            </h3>
                            <p className='font-sans text-sm text-foreground/70 leading-relaxed mb-4'>
                                {job.description}
                            </p>
                            {job.tech && (
                                <p className='font-mono text-xs text-muted'>
                                    {job.tech}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
                <div className='border-t border-border' />
            </div>
        </section>
    )
}
