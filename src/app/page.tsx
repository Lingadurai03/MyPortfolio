import {
    AboutSection,
    HeroSection,
    SkillsSection,
    WorkExperienceSection,
} from '@/sections';

import { NavBar } from '@/components';

export default function Home() {
    return (
        <main>
            <NavBar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <WorkExperienceSection />
        </main>
    );
}
