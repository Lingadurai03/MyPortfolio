import { HeroSection } from '@/sections';

import { NavBar } from '@/components';

export default function Home() {
    return (
        <main className='px-2'>
            <NavBar />
            <HeroSection />
        </main>
    );
}
