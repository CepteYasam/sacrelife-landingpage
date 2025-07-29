"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from '@/app/i18n/client';

interface MarketProps {
  lang: string;
}

const Market = ({ lang }: MarketProps) => {
    const { t } = useTranslation(lang, 'common');
    
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <section id="market" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">{t('market.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                        {t('market.title')}
                    </p>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        {t('market.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <div data-aos="fade-right">
                        <h3 className="text-2xl font-bold mb-8">{t('market.opportunity.title')}</h3>
                        <div className="space-y-8">
                            <div className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div><div className="flex items-center justify-center w-10 h-10 border-2 border-primary rounded-full"><span className="font-bold text-primary">1</span></div></div>
                                    <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>
                                </div>
                                <div className="pb-8"><h4 className="font-bold mb-1">{t('market.opportunity.items.1.title')}</h4><p className="text-gray-600 dark:text-gray-400">{t('market.opportunity.items.1.description')}</p></div>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div><div className="flex items-center justify-center w-10 h-10 border-2 border-primary rounded-full"><span className="font-bold text-primary">2</span></div></div>
                                    <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>
                                </div>
                                <div className="pb-8"><h4 className="font-bold mb-1">{t('market.opportunity.items.2.title')}</h4><p className="text-gray-600 dark:text-gray-400">{t('market.opportunity.items.2.description')}</p></div>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div><div className="flex items-center justify-center w-10 h-10 border-2 border-primary rounded-full"><span className="font-bold text-primary">3</span></div></div>
                                </div>
                                <div><h4 className="font-bold mb-1">{t('market.opportunity.items.3.title')}</h4><p className="text-gray-600 dark:text-gray-400">{t('market.opportunity.items.3.description')}</p></div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <h3 className="text-2xl font-bold mb-8">{t('market.revenueStreams.title')}</h3>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
                                <h4 className="text-lg font-bold text-primary">{t('market.revenueStreams.items.b2bSaas.title')}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{t('market.revenueStreams.items.b2bSaas.description')}</p>
                                <ul className="mt-2 text-sm list-disc list-inside">
                                    <li>{t('market.revenueStreams.items.b2bSaas.packages.basic')}</li>
                                    <li>{t('market.revenueStreams.items.b2bSaas.packages.pro')}</li>
                                    <li>{t('market.revenueStreams.items.b2bSaas.packages.enterprise')}</li>
                                </ul>
                            </div>
                             <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                                <h4 className="text-lg font-bold">{t('market.revenueStreams.items.b2b2c.title')}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{t('market.revenueStreams.items.b2b2c.description')}</p>
                            </div>
                             <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                                <h4 className="text-lg font-bold">{t('market.revenueStreams.items.corporate.title')}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{t('market.revenueStreams.items.corporate.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Market; 