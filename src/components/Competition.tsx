"use client";

import { useTranslation } from '@/app/i18n/client';

interface CompetitionProps {
    lang: string;
}

const Competition = ({ lang }: CompetitionProps) => {
    const { t } = useTranslation(lang, 'common');

    return (
        <section id="competition" className="py-20 sm:py-32 bg-white dark:bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">{t('competition.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                        {t('competition.title')}
                    </p>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        {t('competition.subtitle')}
                    </p>
                </div>
                
                <div className="overflow-x-auto" data-aos="fade-up">
                    <table className="w-full min-w-[800px] comparison-table">
                        <thead>
                            <tr>
                                <th>{t('competition.comparisonTable.feature')}</th>
                                <th className="text-center"><span className="gradient-text font-bold">{t('competition.comparisonTable.sacrelife')}</span></th>
                                <th className="text-center">{t('competition.comparisonTable.enabiz')}</th>
                                <th className="text-center">{t('competition.comparisonTable.global')}</th>
                                <th className="text-center">{t('competition.comparisonTable.local')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{t('competition.comparisonTable.features.aiInsights')}</td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto cross-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto cross-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td>{t('competition.comparisonTable.features.enabizIntegration')}</td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto cross-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto cross-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td>{t('competition.comparisonTable.features.clinicTools')}</td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto cross-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto partial-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto partial-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td>{t('competition.comparisonTable.features.endToEnd')}</td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto partial-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto partial-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </td>
                                <td className="text-center">
                                    <svg className="w-6 h-6 mx-auto cross-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="mt-12 text-center" data-aos="fade-up">
                    <h4 className="text-xl font-bold">{t('competition.moats.title')}</h4>
                    <div className="mt-6 grid md:grid-cols-3 gap-8">
                        <div className="p-6 glass-card border-t-4 border-primary">
                            <h5 className="font-bold text-lg mb-2">{t('competition.moats.items.1.title')}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('competition.moats.items.1.description')}</p>
                        </div>
                        <div className="p-6 glass-card border-t-4 border-secondary">
                            <h5 className="font-bold text-lg mb-2">{t('competition.moats.items.2.title')}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('competition.moats.items.2.description')}</p>
                        </div>
                        <div className="p-6 glass-card border-t-4 border-purple-500">
                            <h5 className="font-bold text-lg mb-2">{t('competition.moats.items.3.title')}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{t('competition.moats.items.3.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competition; 