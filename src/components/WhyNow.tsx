"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from '@/app/i18n/client';

interface WhyNowProps {
    lang: string;
}

const WhyNow = ({ lang }: WhyNowProps) => {
    const { t } = useTranslation(lang, 'common');

    return (
        <section id="why-now" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">{t('whyNow.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                        {t('whyNow.title')}
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        {t('whyNow.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {/* Trend 1: Veri Patlaması */}
                    <div className="p-8 glass-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-6">
                            <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125H20.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h17.25m-17.25 0a1.125 1.125 0 00-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125H20.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-16.5-9.75h15.75m-15.75 0a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-15.75 0h15.75m-15.75 0a1.125 1.125 0 00-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('whyNow.trends.dataExplosion.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('whyNow.trends.dataExplosion.description')}</p>
                    </div>

                    {/* Trend 2: Yapay Zeka Olgunluğu */}
                    <div className="p-8 glass-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-6">
                            <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 3v1.5m0 15v1.5m3.75-18v1.5m0 15v1.5m-7.5-15v1.5m0 15v1.5M12 6.75h.008v.008H12V6.75zM12 17.25h.008v.008H12v-.008zM9.75 9.75h.008v.008H9.75v-.008zM9.75 14.25h.008v.008H9.75v-.008zM14.25 9.75h.008v.008h-.008v-.008zM14.25 14.25h.008v.008h-.008v-.008z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('whyNow.trends.aiMaturity.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('whyNow.trends.aiMaturity.description')}</p>
                    </div>

                    {/* Trend 3: Davranışsal Değişim */}
                    <div className="p-8 glass-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-6">
                            <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75h-7.5" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75h-7.5" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('whyNow.trends.behavioralChange.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('whyNow.trends.behavioralChange.description')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyNow; 