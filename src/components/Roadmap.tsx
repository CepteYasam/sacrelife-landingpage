"use client";

import { useTranslation } from '@/app/i18n/client';

interface RoadmapProps {
    lang: string;
}

const Roadmap = ({ lang }: RoadmapProps) => {
    const { t } = useTranslation(lang, 'common');

    return (
        <section id="roadmap" className="py-20 sm:py-32 bg-white dark:bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-secondary tracking-wider uppercase">{t('roadmap.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                        {t('roadmap.title')}
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        {t('roadmap.subtitle')}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-2xl mx-auto">
                    {/* The line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>

                    {/* Phase 1 */}
                    <div className="relative mb-12" data-aos="fade-up">
                        <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 items-start">
                            <div className="md:text-right mb-4 md:mb-0">
                                <p className="text-sm font-semibold text-primary">{t('roadmap.phases.phase1.timeline')}</p>
                                <h3 className="text-2xl font-bold">{t('roadmap.phases.phase1.title')}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{t('roadmap.phases.phase1.subtitle')}</p>
                            </div>
                            <div className="hidden md:block w-4 h-4 rounded-full mt-2"></div>
                            <div className="relative pl-10 md:pl-0 timeline-item timeline-item-primary">
                                <div className="p-6 rounded-2xl glass-card">
                                    <h4 className="font-semibold mb-2">{t('roadmap.phases.phase1.focus')}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{t('roadmap.phases.phase1.description')}</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            {t('roadmap.phases.phase1.features.1')}
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            {t('roadmap.phases.phase1.features.2')}
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            {t('roadmap.phases.phase1.features.3')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative mb-12" data-aos="fade-up">
                        <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 items-start">
                            <div className="md:text-left mb-4 md:mb-0 md:order-3">
                                <p className="text-sm font-semibold text-secondary">{t('roadmap.phases.phase2.timeline')}</p>
                                <h3 className="text-2xl font-bold">{t('roadmap.phases.phase2.title')}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{t('roadmap.phases.phase2.subtitle')}</p>
                            </div>
                            <div className="hidden md:block w-4 h-4 rounded-full mt-2 md:order-2"></div>
                            <div className="relative pl-10 md:pl-0 md:text-right md:order-1 timeline-item timeline-item-secondary">
                                <div className="p-6 rounded-2xl glass-card">
                                    <h4 className="font-semibold mb-2">{t('roadmap.phases.phase2.focus')}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{t('roadmap.phases.phase2.description')}</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center md:justify-end">
                                            <svg className="w-4 h-4 mr-2 md:mr-0 md:ml-2 text-secondary flex-shrink-0 order-1 md:order-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="order-2 md:order-1">{t('roadmap.phases.phase2.features.1')}</span>
                                        </li>
                                        <li className="flex items-center md:justify-end">
                                            <svg className="w-4 h-4 mr-2 md:mr-0 md:ml-2 text-secondary flex-shrink-0 order-1 md:order-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="order-2 md:order-1">{t('roadmap.phases.phase2.features.2')}</span>
                                        </li>
                                        <li className="flex items-center md:justify-end">
                                            <svg className="w-4 h-4 mr-2 md:mr-0 md:ml-2 text-secondary flex-shrink-0 order-1 md:order-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="order-2 md:order-1">{t('roadmap.phases.phase2.features.3')}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="relative" data-aos="fade-up">
                        <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 items-start">
                            <div className="md:text-right mb-4 md:mb-0">
                                <p className="text-sm font-semibold text-purple-500">{t('roadmap.phases.phase3.timeline')}</p>
                                <h3 className="text-2xl font-bold">{t('roadmap.phases.phase3.title')}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{t('roadmap.phases.phase3.subtitle')}</p>
                            </div>
                            <div className="hidden md:block w-4 h-4 rounded-full mt-2"></div>
                            <div className="relative pl-10 md:pl-0 timeline-item timeline-item-purple">
                                <div className="p-6 rounded-2xl glass-card">
                                    <h4 className="font-semibold mb-2">{t('roadmap.phases.phase3.focus')}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{t('roadmap.phases.phase3.description')}</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            {t('roadmap.phases.phase3.features.1')}
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            {t('roadmap.phases.phase3.features.2')}
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            {t('roadmap.phases.phase3.features.3')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap; 