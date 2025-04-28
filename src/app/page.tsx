import { AboutSection, HeroSection, SkillsSection } from '@/sections';

import { NavBar } from '@/components';

export default function Home() {
    return (
        <main>
            <NavBar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>
    );
}
