import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
    return (
        <>
            <Hero />
            <Experience />
            <Skills />
            <About />
            <Contact />
        </>
    )
}
