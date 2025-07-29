"use client";

import { memo } from 'react';
import { useTranslation } from '@/app/i18n/client';
import DarkVeil from './DarkVeil';

interface HeroProps {
    lang: string;
    onInvestmentClick?: () => void;
}

const Hero = memo(({ lang, onInvestmentClick }: HeroProps) => {
    const { t } = useTranslation(lang, 'common');

    const openInvestmentModal = () => {
        if (onInvestmentClick) {
            onInvestmentClick();
        } else {
            console.log('Yatırım modalı açılacak');
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* DarkVeil Arka Plan Efekti */}
            <div className="absolute inset-0">
                <DarkVeil 
                    hueShift={12}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={0.7}
                    scanlineFrequency={0}
                    warpAmount={0}
                    resolutionScale={1.1}
                />
            </div>
            
            <div className="container mx-auto px-6 text-center z-10">
                <div data-aos="fade-up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                        <span className="block">{t('hero.mainTitle')}</span>
                        <span className="block gradient-text mt-2 animate-background-pan bg-[length:200%_auto]">
                            {t('hero.subtitle')}
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
                        {t('hero.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button 
                            onClick={openInvestmentModal}
                            className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all text-lg"
                        >
                            {t('hero.buttons.investmentOpportunity')}
                        </button>
                        <a 
                            href="#features" 
                            className="w-full sm:w-auto bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all border border-gray-200 dark:border-gray-700 text-lg"
                        >
                            {t('hero.buttons.seeFeatures')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero; 