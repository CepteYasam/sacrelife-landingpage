"use client";
import { FormEvent, useState } from "react";
import { useTranslation } from '@/app/i18n/client';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: string;
}

const ContactModal = ({ isOpen, onClose, lang }: ContactModalProps) => {
    const { t } = useTranslation(lang, 'common');
    const [isSubmitted, setIsSubmitted] = useState(false);
    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            setIsSubmitted(false); 
        }, 3000);
    };

    return (
        <div 
            id="contact-modal" 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" 
            onClick={onClose}
        >
            <div 
                id="modal-content" 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 relative transform transition-all duration-300 scale-100 opacity-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors" aria-label={t('contact.close')}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                {!isSubmitted ? (
                    <>
                        <h3 className="text-2xl font-bold mb-2">{t('contact.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('contact.description')}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.name')}</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.email')}</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.message')}</label>
                                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                                {t('contact.send')}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center p-4 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg">
                        {t('contact.success')}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactModal; 