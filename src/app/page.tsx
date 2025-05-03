import { ToastContainer } from 'react-toastify';

import {
    AboutSection,
    ContactMeSection,
    FooterSection,
    HeroSection,
    SkillsSection,
    WorkExperienceSection,
} from '@/sections';

import { NavBar } from '@/components';

export default function Home() {
    return (
        <main style={{ position: 'relative' }}>
            <ToastContainer position='top-right' autoClose={3000} />
            <NavBar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <WorkExperienceSection />
            <ContactMeSection />
            <FooterSection />
        </main>
    );
}
