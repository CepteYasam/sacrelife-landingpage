"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from '@/app/i18n/client';

interface SolutionProps {
    lang: string;
}

const Solution = ({ lang }: SolutionProps) => {
    const { t } = useTranslation(lang, 'common');
    const [activeTab, setActiveTab] = useState('patient');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    // HTML'deki setupTabs fonksiyonunun React versiyonu
    useEffect(() => {
        const phonePatientView = document.getElementById('phone-patient-view');
        const phoneDoctorView = document.getElementById('phone-doctor-view');
        const phoneScreen = document.getElementById('phone-screen-content');

        if (phoneScreen) {
            phoneScreen.style.opacity = '0';
            setTimeout(() => {
                if (activeTab === 'patient') {
                    if (phonePatientView) phonePatientView.style.display = 'block';
                    if (phoneDoctorView) phoneDoctorView.style.display = 'none';
                } else {
                    if (phonePatientView) phonePatientView.style.display = 'none';
                    if (phoneDoctorView) phoneDoctorView.style.display = 'block';
                }
                phoneScreen.style.opacity = '1';
            }, 300);
        }
    }, [activeTab]);

    return (
        <section id="solution" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">{t('solution.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                        {t('solution.title')}
                    </p>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        {t('solution.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Value Proposition */}
                    <div className="space-y-8" data-aos="fade-right">
                        {/* Tabs for switching between Patient and Doctor views */}
                        <div className="border-b border-gray-200 dark:border-gray-700">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                <button 
                                    className={`tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${activeTab === 'patient' ? 'active' : ''}`}
                                    data-tab="patient"
                                    onClick={() => handleTabChange('patient')}
                                >
                                    {t('solution.tabs.patient')}
                                </button>
                                <button 
                                    className={`tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${activeTab === 'doctor' ? 'active' : ''}`}
                                    data-tab="doctor"
                                    onClick={() => handleTabChange('doctor')}
                                >
                                    {t('solution.tabs.doctor')}
                                </button>
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <div id="patient-tab" className={`tab-content ${activeTab === 'patient' ? 'active' : ''}`}>
                            <h3 className="text-2xl font-bold mb-4">
                                {t('solution.patientValue.title')} <br/>
                                <span className="gradient-text">&ldquo;{t('solution.patientValue.subtitle')}&rdquo;</span>
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-3 font-bold">✓</span>
                                    <span dangerouslySetInnerHTML={{ __html: t('solution.patientValue.benefits.1') }}></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-3 font-bold">✓</span>
                                    <span dangerouslySetInnerHTML={{ __html: t('solution.patientValue.benefits.2') }}></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-3 font-bold">✓</span>
                                    <span dangerouslySetInnerHTML={{ __html: t('solution.patientValue.benefits.3') }}></span>
                                </li>
                            </ul>
                        </div>
                        <div id="doctor-tab" className={`tab-content ${activeTab === 'doctor' ? 'active' : ''}`}>
                            <h3 className="text-2xl font-bold mb-4">
                                {t('solution.doctorValue.title')} <br/>
                                <span className="gradient-text">&ldquo;{t('solution.doctorValue.subtitle')}&rdquo;</span>
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-3 font-bold">✓</span>
                                    <span dangerouslySetInnerHTML={{ __html: t('solution.doctorValue.benefits.1') }}></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-3 font-bold">✓</span>
                                    <span dangerouslySetInnerHTML={{ __html: t('solution.doctorValue.benefits.2') }}></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-3 font-bold">✓</span>
                                    <span dangerouslySetInnerHTML={{ __html: t('solution.doctorValue.benefits.3') }}></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Visual Representation (Phone Mockup) */}
                    <div className="relative h-full min-h-[640px]" data-aos="zoom-in-up">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full max-w-sm p-2 rounded-[40px] bg-gray-800 shadow-2xl">
                                <div className="w-full h-[600px] bg-dark-bg rounded-[32px] overflow-hidden relative">
                                    {/* Phone Screen Content */}
                                    <div id="phone-screen-content" className="p-4 text-white transition-opacity duration-500">
                                        {/* Patient View (Default) */}
                                        <div id="phone-patient-view">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-sm">9:41</span>
                                                <div className="w-16 h-1 bg-white rounded-full"></div>
                                                <div className="flex space-x-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path></svg>
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L10 14.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                </div>
                                            </div>
                                            <div className="text-center mb-6">
                                                <h2 className="text-xl font-bold gradient-text">{t('solution.phoneDemo.patientWelcome')}</h2>
                                                <p className="text-sm text-gray-400">{t('solution.phoneDemo.patientSubtitle')}</p>
                                            </div>
                                            <div className="space-y-3 animate-pulse-slow">
                                                <div className="p-4 rounded-xl bg-blue-500/20 border border-blue-400">
                                                    <h4 className="font-bold text-blue-300">{t('solution.phoneDemo.proactiveWarning')}</h4>
                                                    <p className="text-sm">{t('solution.phoneDemo.creatinineIncrease')}</p>
                                                </div>
                                                <div className="p-4 rounded-xl bg-teal-500/20 border border-teal-400">
                                                    <h4 className="font-bold text-teal-300">{t('solution.phoneDemo.medicationReminder')}</h4>
                                                    <p className="text-sm">{t('solution.phoneDemo.medicationTime')}</p>
                                                </div>
                                                <div className="p-4 rounded-xl bg-purple-500/20 border border-purple-400">
                                                    <h4 className="font-bold text-purple-300">{t('solution.phoneDemo.upcomingAppointment')}</h4>
                                                    <p className="text-sm">{t('solution.phoneDemo.appointmentTomorrow')}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Doctor View */}
                                        <div id="phone-doctor-view" style={{ display: 'none' }}>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-sm">9:41</span>
                                                <div className="w-16 h-1 bg-white rounded-full"></div>
                                                <div className="flex space-x-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path></svg>
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L10 14.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                </div>
                                            </div>
                                            <div className="text-center mb-6">
                                                <h2 className="text-xl font-bold gradient-text">{t('solution.phoneDemo.doctorWelcome')}</h2>
                                                <p className="text-sm text-gray-400">{t('solution.phoneDemo.doctorSubtitle')}</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-gray-700/50 border border-gray-600">
                                                <h4 className="font-bold text-white">{t('solution.phoneDemo.nextPatient')}</h4>
                                                <p className="text-sm text-gray-400">{t('solution.phoneDemo.appointmentTime')}</p>
                                                <div className="mt-4 space-y-2">
                                                    <div className="p-3 rounded-lg bg-red-500/20">
                                                        <h5 className="text-sm font-semibold text-red-300">{t('solution.phoneDemo.aiAlert')}</h5>
                                                        <p className="text-xs">{t('solution.phoneDemo.creatinineAlert')}</p>
                                                    </div>
                                                    <div className="p-3 rounded-lg bg-yellow-500/20">
                                                        <h5 className="text-sm font-semibold text-yellow-300">{t('solution.phoneDemo.medicationCompliance')}</h5>
                                                        <p className="text-xs">{t('solution.phoneDemo.complianceNote')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution; 