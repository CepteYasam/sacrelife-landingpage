"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from '@/app/i18n/client';

interface FooterProps {
    lang: string;
}

const Footer = ({ lang }: FooterProps) => {
    const { t } = useTranslation(lang, 'common');
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-light-bg dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                            <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V9zM10.5 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H11.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xl font-bold gradient-text">SacreLife</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {t('footer.copyright', { year })}
                        </p>
                    </div>
                    
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="AngelList">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 0l3.708 7.416L24 8.64l-6 5.856L19.416 24 12 20.292 4.584 24 6 14.496 0 8.64l8.292-1.224L12 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 