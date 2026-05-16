import { useTranslations } from 'next-intl'
import {
    siJavascript,
    siTypescript,
    siReact,
    siNextdotjs,
    siNodedotjs,
    siNestjs,
    siAstro,
    siPostgresql,
    siMongodb,
    siMysql,
    siGit,
    siTailwindcss,
    siFigma,
    siRedux,
    siWordpress,
    siJest,
    siExpress,
    siGithub,
    siFirebase,
    siSass,
    siHtml5,
} from 'simple-icons'

type SimpleIcon = { title: string; path: string }

const skills: SimpleIcon[] = [
    siJavascript,
    siTypescript,
    siReact,
    siNextdotjs,
    siNodedotjs,
    siNestjs,
    siAstro,
    siExpress,
    siRedux,
    siPostgresql,
    siMongodb,
    siMysql,
    siFirebase,
    siTailwindcss,
    siSass,
    siHtml5,
    siGit,
    siGithub,
    siJest,
    siFigma,
    siWordpress,
]

function SkillBadge({ icon }: { icon: SimpleIcon }) {
    return (
        <div className='flex flex-col items-center gap-2 p-4 rounded-md bg-card border border-border hover:border-foreground/30 transition-colors group'>
            <svg
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='w-7 h-7 text-foreground/70 group-hover:text-foreground transition-colors fill-current'
                aria-label={icon.title}
            >
                <path d={icon.path} />
            </svg>
            <span className='font-mono text-[10px] text-muted group-hover:text-foreground/70 transition-colors text-center leading-tight'>
                {icon.title}
            </span>
        </div>
    )
}

export function Skills() {
    const t = useTranslations('skills')

    return (
        <section id='skills' className='py-24 px-6 max-w-5xl mx-auto'>
            <h2 className='font-mono text-xs text-muted uppercase tracking-[0.2em] mb-16'>
                {t('title')}
            </h2>

            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-7 gap-3'>
                {skills.map((icon) => (
                    <SkillBadge key={icon.title} icon={icon} />
                ))}
            </div>
        </section>
    )
}
