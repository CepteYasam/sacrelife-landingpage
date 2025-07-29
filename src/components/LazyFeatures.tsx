"use client";

import { memo } from 'react';
import { useTranslation } from '@/app/i18n/client';

interface FeaturesProps {
    lang: string;
}

const Features = memo(({ lang }: FeaturesProps) => {
    const { t } = useTranslation(lang, 'common');

    const patientSafetyFeatures = [
        {
            id: 1,
            title: t('features.items.1.title'),
            description: t('features.items.1.description'),
            icon: <svg className="w-6 h-6 text-red-500 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>,
            bgColor: "bg-red-100 dark:bg-red-900/50"
        },
        {
            id: 3,
            title: t('features.items.3.title'),
            description: t('features.items.3.description'),
            icon: <svg className="w-6 h-6 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
            bgColor: "bg-blue-100 dark:bg-blue-900/50"
        },
        {
            id: 5,
            title: t('features.items.5.title'),
            description: t('features.items.5.description'),
            icon: <svg className="w-6 h-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
            bgColor: "bg-green-100 dark:bg-green-900/50"
        },
        {
            id: 6,
            title: t('features.items.6.title'),
            description: t('features.items.6.description'),
            icon: <svg className="w-6 h-6 text-yellow-500 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            bgColor: "bg-yellow-100 dark:bg-yellow-900/50"
        },
        {
            id: 17,
            title: t('features.items.17.title'),
            description: t('features.items.17.description'),
            icon: <svg className="w-6 h-6 text-purple-500 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.542-.358 1.253 1.253 0 01-.885-.442A2.25 2.25 0 0015 12c0-1.243-.988-2.25-2.22-2.25s-2.22 1.007-2.22 2.25c0 .592.232 1.121.608 1.519l.354.416c.329.387.755.635 1.22.635h1.125c.604 0 1.13-.328 1.414-.824l.282-.499a2.25 2.25 0 00-2.08-3.165 4.502 4.502 0 00-4.476 4.292A9.753 9.753 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>,
            bgColor: "bg-purple-100 dark:bg-purple-900/50"
        },
        {
            id: 21,
            title: t('features.items.21.title'),
            description: t('features.items.21.description'),
            icon: <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.751A11.959 11.959 0 0112 2.75c-2.176 0-4.205.6-5.902 1.636z" /></svg>,
            bgColor: "bg-indigo-100 dark:bg-indigo-900/50"
        },
        {
            id: 23,
            title: t('features.items.23.title'),
            description: t('features.items.23.description'),
            icon: <svg className="w-6 h-6 text-pink-500 dark:text-pink-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.752 3.752 0 01-4.23-1.01 3.752 3.752 0 01-1.01-4.23A3.75 3.75 0 018.25 6.03a3.75 3.75 0 014.23 1.01m-4.23 4.23a3.75 3.75 0 00-1.01 4.23A3.75 3.75 0 006.03 18.75m11.94-1.194c.534.534.534 1.404 0 1.938s-1.404.534-1.938 0l-1.194-1.194-1.938-1.938c-.534-.534-.534-1.404 0-1.938s1.404-.534 1.938 0l1.194 1.194 1.938 1.938z" /></svg>,
            bgColor: "bg-pink-100 dark:bg-pink-900/50"
        }
    ];

    const doctorEfficiencyFeatures = [
        {
            id: 2,
            title: t('features.items.2.title'),
            description: t('features.items.2.description'),
            icon: <svg className="w-6 h-6 text-teal-500 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.542L16.5 21.75l-.398-1.208a3.375 3.375 0 00-2.456-2.456L12.75 18l1.208-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.208a3.375 3.375 0 002.456 2.456L20.25 18l-1.208.398a3.375 3.375 0 00-2.456 2.456z" /></svg>,
            bgColor: "bg-teal-100 dark:bg-teal-900/50"
        },
        {
            id: 7,
            title: t('features.items.7.title'),
            description: t('features.items.7.description'),
            icon: <svg className="w-6 h-6 text-cyan-500 dark:text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" /></svg>,
            bgColor: "bg-cyan-100 dark:bg-cyan-900/50"
        },
        {
            id: 15,
            title: t('features.items.15.title'),
            description: t('features.items.15.description'),
            icon: <svg className="w-6 h-6 text-orange-500 dark:text-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
            bgColor: "bg-orange-100 dark:bg-orange-900/50"
        },
        {
            id: 19,
            title: t('features.items.19.title'),
            description: t('features.items.19.description'),
            icon: <svg className="w-6 h-6 text-lime-500 dark:text-lime-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>,
            bgColor: "bg-lime-100 dark:bg-lime-900/50"
        },
        {
            id: 20,
            title: t('features.items.20.title'),
            description: t('features.items.20.description'),
            icon: <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            bgColor: "bg-gray-100 dark:bg-gray-700"
        }
    ];

    return (
        <section id="features" className="py-20 sm:py-32 bg-white dark:bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-secondary tracking-wider uppercase">{t('features.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                        {t('features.title')}
                    </p>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        {t('features.subtitle')}
                    </p>
                </div>

                {/* Kategori 1: Hasta Güçlendirme ve Güvenlik */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-10" data-aos="fade-up">{t('features.categories.patientSafety')}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {patientSafetyFeatures.map((feature, index) => (
                            <div key={feature.id} className="p-6 glass-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${feature.bgColor} mb-4`}>
                                    {feature.icon}
                                </div>
                                <h4 className="font-bold mb-2">{feature.id}. {feature.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Kategori 2: Doktor & Klinik Verimliliği */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-10" data-aos="fade-up">{t('features.categories.doctorEfficiency')}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {doctorEfficiencyFeatures.map((feature, index) => (
                            <div key={feature.id} className="p-6 glass-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${feature.bgColor} mb-4`}>
                                    {feature.icon}
                                </div>
                                <h4 className="font-bold mb-2">{feature.id}. {feature.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Kategori 3: Yapay Zeka ve Veri Gücü */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-10" data-aos="fade-up">{t('features.categories.aiPower')}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 glass-card" data-aos="fade-up">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900/50 mb-4">
                                <svg className="w-6 h-6 text-fuchsia-500 dark:text-fuchsia-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">4. {t('features.items.4.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.4.description')}</p>
                        </div>
                        <div className="p-6 glass-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100 dark:bg-rose-900/50 mb-4">
                                <svg className="w-6 h-6 text-rose-500 dark:text-rose-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.325 3.478.097 6.756-1.343 8.45-3.997zM4.125 18.75h15.75c1.657 0 3-1.343 3-3v-6c0-1.657-1.343-3-3-3H4.125c-1.657 0-3 1.343-3 3v6c0 1.657 1.343 3 3 3z" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">8. {t('features.items.8.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.8.description')}</p>
                        </div>
                        <div className="p-6 glass-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-sky-100 dark:bg-sky-900/50 mb-4">
                                <svg className="w-6 h-6 text-sky-500 dark:text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.96 14.96 0 01.346 6.16m-5.84 2.56a14.96 14.96 0 00.346-6.16m0 0a6 6 0 0111.38-3.12l-5.84 5.84m-5.84-5.84a14.96 14.96 0 016.16-.346m-6.16.346a6 6 0 01-7.38 5.84m13.22-5.84a14.96 14.96 0 00-6.16.346m6.16-.346a6 6 0 005.84-7.38m-5.84 7.38l-5.84-5.84" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">12. {t('features.items.12.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.12.description')}</p>
                        </div>
                        <div className="p-6 glass-card" data-aos="fade-up">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 mb-4">
                                <svg className="w-6 h-6 text-emerald-500 dark:text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.002z" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">13. {t('features.items.13.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.13.description')}</p>
                        </div>
                        <div className="p-6 glass-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100 dark:bg-amber-900/50 mb-4">
                                <svg className="w-6 h-6 text-amber-500 dark:text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15.75L3 17.25m18-1.5L21 17.25m-18 0h18M12 21V3M3 3h18M3 21h18" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">18. {t('features.items.18.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.18.description')}</p>
                        </div>
                    </div>
                </div>

                {/* Kategori 4: Ekosistem Entegrasyonları */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-10" data-aos="fade-up">{t('features.categories.integrations')}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 glass-card" data-aos="fade-up">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-violet-100 dark:bg-violet-900/50 mb-4">
                                <svg className="w-6 h-6 text-violet-500 dark:text-violet-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.325 3.478.097 6.756-1.343 8.45-3.997zM4.125 12h15.75c1.657 0 3-1.343 3-3v-3c0-1.657-1.343-3-3-3H4.125c-1.657 0-3 1.343-3 3v3c0 1.657 1.343 3 3 3z" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">9. {t('features.items.9.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.9.description')}</p>
                        </div>
                        <div className="p-6 glass-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-stone-100 dark:bg-stone-700 mb-4">
                                <svg className="w-6 h-6 text-stone-500 dark:text-stone-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">10. {t('features.items.10.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.10.description')}</p>
                        </div>
                        <div className="p-6 glass-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-700 mb-4">
                                <svg className="w-6 h-6 text-zinc-500 dark:text-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">11. {t('features.items.11.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.11.description')}</p>
                        </div>
                        <div className="p-6 glass-card" data-aos="fade-up">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900/50 mb-4">
                                <svg className="w-6 h-6 text-red-500 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 004.5 7.5v9A2.25 2.25 0 004.5 18.75z" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">14. {t('features.items.14.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.14.description')}</p>
                        </div>
                        <div className="p-6 glass-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 mb-4">
                                <svg className="w-6 h-6 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">16. {t('features.items.16.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.16.description')}</p>
                        </div>
                        <div className="p-6 glass-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/50 mb-4">
                                <svg className="w-6 h-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                            </div>
                            <h4 className="font-bold mb-2">22. {t('features.items.22.title')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('features.items.22.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Features.displayName = 'Features';

export default Features; 