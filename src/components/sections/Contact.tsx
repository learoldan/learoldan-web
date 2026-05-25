'use client'

import { useActionState } from 'react'
import { useTranslations } from 'next-intl'
import { sendEmail } from '@/app/actions/sendEmail'

const initialState = { status: 'idle' as const }

export function Contact() {
    const t = useTranslations('contact')
    const [state, formAction, pending] = useActionState(sendEmail, initialState)

    return (
        <section id='contact' className='py-24 px-6 max-w-5xl mx-auto'>
            <h2 className='font-mono text-xs text-muted uppercase tracking-[0.2em] mb-4'>
                {t('title')}
            </h2>
            <p className='font-mono text-2xl sm:text-3xl text-foreground mb-16 font-medium'>
                {t('subtitle')}
            </p>

            <div className='grid grid-cols-1 md:grid-cols-[1fr_320px] gap-16'>
                <form action={formAction} className='space-y-6'>
                    {/* Honeypot — hidden from humans, bots fill it */}
                    <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden='true'>
                        <input
                            id='website'
                            name='website'
                            type='text'
                            tabIndex={-1}
                            autoComplete='off'
                        />
                    </div>
                    <div className='space-y-2'>
                        <label
                            htmlFor='name'
                            className='font-mono text-xs text-muted uppercase tracking-wider'
                        >
                            {t('name')}
                        </label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            required
                            placeholder={t('namePlaceholder')}
                            className='w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground transition-colors'
                        />
                    </div>

                    <div className='space-y-2'>
                        <label
                            htmlFor='email'
                            className='font-mono text-xs text-muted uppercase tracking-wider'
                        >
                            {t('email')}
                        </label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            required
                            placeholder={t('emailPlaceholder')}
                            className='w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground transition-colors'
                        />
                    </div>

                    <div className='space-y-2'>
                        <label
                            htmlFor='message'
                            className='font-mono text-xs text-muted uppercase tracking-wider'
                        >
                            {t('message')}
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            rows={5}
                            required
                            placeholder={t('messagePlaceholder')}
                            className='w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground transition-colors resize-none'
                        />
                    </div>

                    {state.status === 'success' && (
                        <p className='font-mono text-xs text-foreground/70'>
                            {t('successMessage')}
                        </p>
                    )}
                    {state.status === 'error' && (
                        <p className='font-mono text-xs text-red-500'>
                            {t('errorMessage')}
                        </p>
                    )}

                    <button
                        type='submit'
                        disabled={pending}
                        className='font-sans text-sm px-6 py-3 bg-foreground text-background rounded-sm hover:opacity-80 transition-opacity disabled:opacity-40'
                    >
                        {pending ? t('sending') : t('send')}
                    </button>
                </form>

                <div className='flex flex-col gap-6 pt-2'>
                    <a
                        href='mailto:learoldan.dev@gmail.com'
                        className='flex items-center gap-3 font-sans text-sm text-foreground/70 hover:text-foreground transition-colors group'
                    >
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            className='shrink-0'
                        >
                            <rect width='20' height='16' x='2' y='4' rx='2' />
                            <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                        </svg>
                        learoldan.dev@gmail.com
                    </a>
                    <a
                        href='https://www.linkedin.com/in/leandro-martin-roldan/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-3 font-sans text-sm text-foreground/70 hover:text-foreground transition-colors'
                    >
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                        >
                            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href='https://github.com/learoldan'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-3 font-sans text-sm text-foreground/70 hover:text-foreground transition-colors'
                    >
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                        >
                            <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z' />
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
