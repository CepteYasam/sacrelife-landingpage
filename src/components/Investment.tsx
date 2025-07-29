"use client";
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from 'next-themes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from '@/app/i18n/client';

ChartJS.register(ArcElement, Tooltip, Legend);

interface InvestmentProps {
    lang: string;
    onContactClick?: () => void;
}

const Investment = ({ lang, onContactClick }: InvestmentProps) => {
    const { t } = useTranslation(lang, 'common');
    const { theme } = useTheme();
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });
    }, []);

    useEffect(() => {
        const isDarkMode = theme === 'dark';
        setChartOptions({
            responsive: true,
            maintainAspectRatio: true,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: isDarkMode ? '#cbd5e1' : '#475569',
                        font: { size: 12 },
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (context: any) => `${context.label}: ${context.parsed}%`
                    }
                }
            }
        });
    }, [theme]);

    const chartData = {
        labels: [t('financials.investment.fundUsage.product'), t('financials.investment.fundUsage.sales'), t('financials.investment.fundUsage.operations')],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: ['rgba(13, 148, 136, 0.8)', 'rgba(37, 99, 235, 0.8)', 'rgba(124, 58, 237, 0.8)'],
            borderColor: theme === 'dark' ? '#020617' : '#f8fafc',
            borderWidth: 3,
            hoverOffset: 8
        }]
    };

    return (
        <section id="investment" className="py-20 sm:py-32 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-primary-light tracking-wider uppercase">{t('investment.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        {t('investment.title')}
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <div className="mb-8">
                            <p className="text-lg text-gray-300">{t('financials.investment.seedRound')}</p>
                            <p className="text-5xl font-bold gradient-text">$3,000,000</p>
                        </div>
                        <div className="mb-8">
                            <p className="text-lg text-gray-300">{t('financials.investment.equity')}</p>
                            <p className="text-3xl font-bold text-white">20%</p>
                            <p className="text-sm text-gray-400">($15M {t('financials.investment.valuation')})</p>
                        </div>
                        <p className="text-gray-300">{t('financials.investment.description')}</p>
                    </div>
                    <div className="relative w-full max-w-sm mx-auto" data-aos="fade-left">
                        <Doughnut data={chartData} options={chartOptions} />
                        <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
                            <div>
                                <p className="text-sm text-gray-400">{t('financials.investment.fundUsage.title')}</p>
                                <p className="text-2xl font-bold text-white">{t('financials.investment.fundUsage.distribution')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="mt-16 text-center" data-aos="fade-up">
                    <h4 className="text-xl font-semibold mb-4">{t('investment.finalCta')}</h4>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-8">{t('investment.description')}</p>
                    <button 
                        onClick={onContactClick}
                        className="bg-white text-gray-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all text-lg"
                    >
                        {t('investment.cta')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Investment; 