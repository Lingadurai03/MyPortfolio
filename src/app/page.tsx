import { ToastContainer } from 'react-toastify';

import {
    AboutSection,
    ContactMeSection,
    HeroSection,
    SkillsSection,
    WorkExperienceSection,
} from '@/sections';

import { NavBar } from '@/components';

export default function Home() {
    return (
        <main style={{ position: 'relative' }}>
            <NavBar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <WorkExperienceSection />
            <ContactMeSection />
            <ToastContainer position='top-right' autoClose={3000} />
        </main>
    );
}
