"use client";
import { memo } from 'react';
import { useTranslation } from '@/app/i18n/client';

interface InvestmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onContactOpen: () => void;
    lang: string;
}

const InvestmentModal = memo(({ isOpen, onClose, onContactOpen, lang }: InvestmentModalProps) => {
    const { t } = useTranslation(lang, 'common');
    if (!isOpen) return null;

    return (
        <div 
            id="investment-modal" 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" 
            onClick={onClose}
        >
            <div 
                id="investment-modal-content" 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative transform transition-all duration-300 scale-100 opacity-100 overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors" aria-label={t('investmentModal.close')}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <h3 className="text-3xl font-bold mb-2 gradient-text">{t('investmentModal.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">{t('investmentModal.subtitle')}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('investmentModal.globalMarket')}</p>
                        <p className="text-4xl font-bold text-primary dark:text-primary-light">$2.19 Trilyon</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('investmentModal.expectedValue2034')}</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('investmentModal.aiMarket')}</p>
                        <p className="text-4xl font-bold text-secondary dark:text-secondary-light">44%</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('investmentModal.expectedGrowthCAGR')}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <h4 className="text-xl font-bold mb-4">{t('investmentModal.growthTitle')}</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                            <span className="mr-2 mt-1 text-primary">✓</span>
                            <span dangerouslySetInnerHTML={{ __html: t('investmentModal.chronicDiseases') }}></span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1 text-primary">✓</span>
                            <span dangerouslySetInnerHTML={{ __html: t('investmentModal.consumerDemand') }}></span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1 text-primary">✓</span>
                            <span dangerouslySetInnerHTML={{ __html: t('investmentModal.costPressure') }}></span>
                        </li>
                    </ul>
                </div>
                
                <div className="mt-8 text-center">
                     <p className="text-lg mb-4">{t('investmentModal.readyQuestion')}</p>
                     <button 
                        onClick={() => {
                            onClose();
                            onContactOpen();
                        }} 
                        className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                        {t('investmentModal.contactButton')}
                    </button>
                </div>
            </div>
        </div>
    );
});

InvestmentModal.displayName = 'InvestmentModal';

export default InvestmentModal; 