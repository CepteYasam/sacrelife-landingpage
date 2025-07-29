"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from '../app/i18n/client';
import { languages } from '../app/i18n/settings';

interface HeaderProps {
    onInvestmentClick?: () => void;
}

const Header = ({ onInvestmentClick }: HeaderProps) => {
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { i18n, t } = useTranslation('tr', 'common');
    const languageMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    
                    // Aktif bölümü belirle
                    const sections = ['hero', 'problem', 'solution', 'features', 'roadmap', 'market', 'competition', 'financials', 'team'];
                    const scrollPosition = window.scrollY + 100; // Header yüksekliği için offset

                    for (let i = sections.length - 1; i >= 0; i--) {
                        const section = document.getElementById(sections[i]);
                        if (section && section.offsetTop <= scrollPosition) {
                            setActiveSection(sections[i]);
                            break;
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Click outside handler for language menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
                setIsLanguageMenuOpen(false);
            }
        };

        if (isLanguageMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLanguageMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsLanguageMenuOpen(false);
        // URL'yi güncelle
        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/');
        if (pathSegments[1] && languages.includes(pathSegments[1])) {
            // Mevcut locale'i yeni locale ile değiştir
            const newPath = `/${lang}${pathSegments.slice(2).join('/')}`;
            window.history.pushState({}, '', newPath);
        } else {
            // Locale yoksa ekle
            const newPath = `/${lang}${currentPath}`;
            window.history.pushState({}, '', newPath);
        }
    };

    const getCurrentLanguage = () => {
        const currentLang = i18n.language;
        const langNames: { [key: string]: string } = {
            'tr': 'TR',
            'en': 'EN',
            'es': 'ES',
            'fr': 'FR',
            'de': 'DE',
            'it': 'IT',
            'pt': 'PT',
            'ru': 'RU',
        };
        return langNames[currentLang] || 'TR';
    };

    // Smooth scroll fonksiyonu
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80; // Header yüksekliği
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    // Aktif link stilini belirle
    const getLinkStyle = (sectionId: string) => {
        const isActive = activeSection === sectionId;
        return `transition-colors font-medium ${
            isActive 
                ? 'text-primary dark:text-primary-light' 
                : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light'
        }`;
    };

    if (!mounted) {
        return null;
    }

    return (
        <header id="main-header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-md' : ''}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button 
                        onClick={() => scrollToSection('hero')} 
                        className="flex items-center space-x-3 cursor-pointer"
                    >
                        <svg className="w-10 h-10 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V9zM10.5 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H11.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                        <span className="text-2xl font-bold gradient-text">SacreLife</span>
                    </button>

                    <nav className="hidden lg:flex items-center space-x-8">
                        <button 
                            onClick={() => scrollToSection('problem')} 
                            className={getLinkStyle('problem')}
                        >
                            {t('header.navigation.problem')}
                        </button>
                        <button 
                            onClick={() => scrollToSection('solution')} 
                            className={getLinkStyle('solution')}
                        >
                            {t('header.navigation.solution')}
                        </button>
                        <button 
                            onClick={() => scrollToSection('features')} 
                            className={getLinkStyle('features')}
                        >
                            {t('header.navigation.features')}
                        </button>
                        <button 
                            onClick={() => scrollToSection('roadmap')} 
                            className={getLinkStyle('roadmap')}
                        >
                            {t('header.navigation.roadmap')}
                        </button>
                        <button 
                            onClick={() => scrollToSection('market')} 
                            className={getLinkStyle('market')}
                        >
                            {t('header.navigation.market')}
                        </button>
                        <button 
                            onClick={() => scrollToSection('competition')} 
                            className={getLinkStyle('competition')}
                        >
                            {t('header.navigation.competition')}
                        </button>
                        <button 
                            onClick={() => scrollToSection('financials')} 
                            className={getLinkStyle('financials')}
                        >
                            {t('header.navigation.financials')}
                        </button>
                        <button 
                            onClick={() => scrollToSection('team')} 
                            className={getLinkStyle('team')}
                        >
                            {t('header.navigation.team')}
                        </button>
                    </nav>

                    <div className="flex items-center space-x-4">
                        {/* Dil Değiştirme Tuşu */}
                        <div className="relative" ref={languageMenuRef}>
                            <button 
                                onClick={toggleLanguageMenu}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center space-x-1"
                                aria-label={t('header.buttons.changeLanguage')}
                            >
                                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                                </svg>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{getCurrentLanguage()}</span>
                            </button>
                            
                            {isLanguageMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                                    {languages.map((lang) => {
                                        const langNames: { [key: string]: string } = {
                                            'tr': t('header.languages.turkish'),
                                            'en': t('header.languages.english'),
                                            'es': t('header.languages.spanish'),
                                            'fr': t('header.languages.french'),
                                            'de': t('header.languages.german'),
                                            'it': t('header.languages.italian'),
                                            'pt': t('header.languages.portuguese'),
                                            'ru': t('header.languages.russian'),
                                        };
                                        return (
                                            <button
                                                key={lang}
                                                onClick={() => changeLanguage(lang)}
                                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                                                    i18n.language === lang 
                                                        ? 'text-primary dark:text-primary-light bg-gray-50 dark:bg-gray-700' 
                                                        : 'text-gray-700 dark:text-gray-300'
                                                }`}
                                            >
                                                {langNames[lang]}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>


                        <button 
                            onClick={onInvestmentClick} 
                            className="hidden sm:inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                        >
                            {t('header.buttons.investNow')}
                        </button>
                        <button onClick={toggleMenu} className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" aria-label={t('header.buttons.openMenu')}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div id="mobile-menu" className="lg:hidden bg-white/90 dark:bg-dark-bg/90 backdrop-blur-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <button onClick={() => { scrollToSection('problem'); closeMenu(); }} className="mobile-nav-link text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">{t('header.navigation.problem')}</button>
                        <button onClick={() => { scrollToSection('solution'); closeMenu(); }} className="mobile-nav-link text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">{t('header.navigation.solution')}</button>
                        <button onClick={() => { scrollToSection('features'); closeMenu(); }} className="mobile-nav-link text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">{t('header.navigation.features')}</button>
                        <button onClick={() => { scrollToSection('roadmap'); closeMenu(); }} className="mobile-nav-link text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">{t('header.navigation.roadmap')}</button>
                        <button onClick={() => { scrollToSection('market'); closeMenu(); }} className="mobile-nav-link text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">{t('header.navigation.market')}</button>
                        <button onClick={() => { scrollToSection('competition'); closeMenu(); }} className="mobile-nav-link text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">{t('header.navigation.competition')}</button>
                        <button onClick={() => { scrollToSection('financials'); closeMenu(); }} className="mobile-nav-link text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">{t('header.navigation.financials')}</button>
                        <button onClick={() => { scrollToSection('team'); closeMenu(); }} className="mobile-nav-link text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">{t('header.navigation.team')}</button>
                        <button onClick={() => { onInvestmentClick?.(); closeMenu(); }} className="mobile-nav-link text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">{t('header.buttons.investNow')}</button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header; 