import Image from 'next/image';
import Link from 'next/link';

import { ProfileImage } from '@/assets/images';
import { FilePdf, TwinkleStar } from '@/assets/svg';

import {
    HeroOrbit,
    MotionAnimation,
    RotatingSkills,
    WavingHand,
} from '@/components';

const Hero = () => {
    return (
        <section
            id='hero'
            className='py-20 sm:py-32 flex justify-center relative z-0 overflow-clip'
        >
            <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_70%,transparent_100%)]'>
                <div className='heroRing size-[620px]' />
                <div className='heroRing size-[820px]' />
                <div className='heroRing size-[1020px]' />
                <div className='heroRing size-[1220px]' />

                <HeroOrbit
                    size='430'
                    animationDuration={30}
                    shouldOrbit
                    rotation={-14}
                    shouldSpin
                >
                    <TwinkleStar className='size-8 text-emerald-300/20' />
                </HeroOrbit>
                <HeroOrbit
                    size='440'
                    animationDuration={32}
                    shouldOrbit
                    rotation={90}
                    shouldSpin
                >
                    <TwinkleStar className='size-5 text-emerald-300' />
                </HeroOrbit>
                <HeroOrbit
                    size='520'
                    shouldOrbit
                    animationDuration={38}
                    rotation={-41}
                    shouldSpin
                >
                    <div className='size-2 rounded-full bg-emerald-300/20' />
                </HeroOrbit>
                <HeroOrbit
                    size='530'
                    animationDuration={34}
                    shouldOrbit
                    rotation={178}
                    shouldSpin
                >
                    <TwinkleStar className='size-10 text-emerald-300/20' />
                </HeroOrbit>
                <HeroOrbit
                    size='550'
                    animationDuration={36}
                    shouldOrbit
                    rotation={20}
                    shouldSpin
                >
                    <TwinkleStar className='size-12 text-emerald-300' />
                </HeroOrbit>
                <HeroOrbit
                    size='590'
                    animationDuration={38}
                    shouldOrbit
                    rotation={98}
                    shouldSpin
                >
                    <TwinkleStar className='size-8 text-emerald-300' />
                </HeroOrbit>
                <HeroOrbit
                    size='650'
                    shouldOrbit
                    animationDuration={54}
                    rotation={-5}
                    shouldSpin
                >
                    <div className='size-2 rounded-full bg-emerald-300/20' />
                </HeroOrbit>
                <HeroOrbit
                    size='710'
                    animationDuration={40}
                    shouldOrbit
                    rotation={144}
                    shouldSpin
                >
                    <TwinkleStar className='size-14 text-emerald-300/20' />
                </HeroOrbit>
                <HeroOrbit
                    size='720'
                    shouldOrbit
                    animationDuration={42}
                    rotation={85}
                    shouldSpin
                >
                    <div className='size-2 rounded-full bg-emerald-200' />
                </HeroOrbit>
                <HeroOrbit
                    size='800'
                    shouldOrbit
                    rotation={-72}
                    shouldSpin
                    animationDuration={44}
                >
                    <TwinkleStar className='size-24 text-emerald-300' />
                </HeroOrbit>
            </div>

            <div className='container mt-5 z-10'>
                <div className='flex flex-col items-center'>
                    <MotionAnimation direction='fade' duration={2}>
                        <Image
                            className='border rounded-b-full'
                            alt='Lingadurai'
                            src={ProfileImage}
                            width={200}
                            height={200}
                            priority
                            sizes='(max-width: 600px) 200px, 400px'
                        />
                    </MotionAnimation>
                    <MotionAnimation direction='down'>
                        <div className='flex justify-center items-center gap-3 px-10 py-3 bg-gray-950 rounded-2xl mt-2 border border-gray-800'>
                            <div className='relative flex items-center'>
                                <span className='absolute inline-flex h-4 w-4 rounded-full bg-green-500 opacity-75 animate-ringPulse' />

                                <span className='absolute inline-flex h-4 w-4 rounded-full bg-green-500 opacity-75 animate-ringPulse delay-400' />
                                <span className='relative inline-flex h-4 w-4 rounded-full bg-green-500' />
                            </div>

                            <p className='text-xs sm:text-sm'>
                                Available for opportunities
                            </p>
                        </div>
                    </MotionAnimation>
                </div>
                <div className='flex justify-center flex-col items-center mt-5 gap-2'>
                    <MotionAnimation direction='left' duration={2}>
                        <h1 className='text-md text-white/80 italic flex flex-col sm:flex-row items-start sm:items-center'>
                            <span className='text-xs sm:text-lg'>Hey, I’m</span>
                            <span className='ml-2 text-4xl not-italic font-bold text-white font-serif tracking-wider'>
                                {'Lingadurai'.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        className='inline-block animate-floatLetter ml-0.5'
                                        style={{
                                            animationDelay: `${index * 0.3}s`,
                                            animationDuration: '4s',
                                            animationIterationCount: 'infinite',
                                            display: 'inline-block',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}{' '}
                                <WavingHand />
                            </span>
                        </h1>
                    </MotionAnimation>

                    <MotionAnimation
                        direction='right'
                        duration={2}
                        className='flex justify-center items-center gap-2  flex-col sm:flex-row  sm:items-center'
                    >
                        <span className='text-xs sm:text-lg text-white/80 italic h-min'>
                            Transforming ideas into code as a
                        </span>
                        <RotatingSkills />
                    </MotionAnimation>

                    <MotionAnimation direction='left' duration={2}>
                        <p className='mt-2 text-xs sm:text-lg text-center text-white/80 italic '>
                            I’ve solved{' '}
                            <span className='font-bold text-white not-italic'>
                                180+
                            </span>{' '}
                            problems on GFG and{' '}
                            <span className='font-bold text-white not-italic'>
                                100+
                            </span>{' '}
                            on LeetCode
                        </p>
                    </MotionAnimation>
                </div>
                <MotionAnimation
                    direction='down'
                    className='flex flex-col items-center mt-8 gap-4'
                >
                    <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:border-white/15 hover:cursor-pointer hover:bg-white/90 transition-all duration-300'>
                        <Link href='#contact'>
                            <span className='font-semibold'>Get in Touch</span>
                            <span>🚀</span>
                        </Link>
                    </button>

                    <button>
                        <a
                            href='https://drive.google.com/uc?export=download&id=1nNenLEUFjkksVriKzUXNdszwDuo3WCoA'
                            download
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 border bg-white/5 border-white/15 px-6 h-12 rounded-xl hover:bg-transparent hover:text-white hover:cursor-pointer transition-all duration-300'
                        >
                            <FilePdf className='size-5 fill-emerald-300' />
                            <span className='font-semibold'>
                                Download Resume
                            </span>
                        </a>
                    </button>
                </MotionAnimation>
            </div>
        </section>
    );
};

export default Hero;
