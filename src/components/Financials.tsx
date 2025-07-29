"use client";

import { useEffect, useRef } from 'react';
import { useTranslation } from '@/app/i18n/client';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

interface FinancialsProps {
    lang: string;
}

const Financials = ({ lang }: FinancialsProps) => {
    const { t } = useTranslation(lang, 'common');

    // Finansal Grafik Verileri
    const financialData = {
        labels: [t('financials.chart.year1'), t('financials.chart.year2'), t('financials.chart.year3')],
        datasets: [{
            label: t('financials.chart.yearlyRevenue'),
            data: [350000, 1800000, 5500000],
            backgroundColor: 'rgba(13, 148, 136, 0.6)', // primary
            borderColor: 'rgba(13, 148, 136, 1)',
            borderWidth: 2,
            borderRadius: 5,
            barPercentage: 0.6
        }]
    };

    // Fon Kullanımı Grafik Verileri
    const fundUsageData = {
        labels: [t('financials.investment.fundUsage.product'), t('financials.investment.fundUsage.sales'), t('financials.investment.fundUsage.operations')],
        datasets: [{
            label: t('financials.chart.fundUsageLabel'),
            data: [40, 35, 25],
            backgroundColor: [
                'rgba(13, 148, 136, 0.8)',  // primary
                'rgba(37, 99, 235, 0.8)', // secondary
                'rgba(124, 58, 237, 0.8)' // purple-600
            ],
            borderColor: '#f8fafc',
            borderWidth: 3,
            hoverOffset: 8
        }]
    };

    const financialOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: '#64748b',
                    font: { size: 14 }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context: any) {
                        let label = context.dataset.label || '';
                        if (label) { label += ': '; }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { 
                                style: 'currency', 
                                currency: 'USD', 
                                notation: 'compact' 
                            }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#64748b', font: { size: 12 } },
                grid: { display: false }
            },
            y: {
                ticks: { 
                    color: '#64748b',
                    font: { size: 12 },
                    callback: function(value: any) {
                        return '$' + (value / 1000000) + 'M';
                    }
                },
                grid: { color: '#e5e7eb', borderDash: [2, 4] }
            }
        }
    };

    const fundUsageOptions = {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    color: '#64748b',
                    font: { size: 12 },
                    padding: 20
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context: any) {
                        let label = context.label || '';
                        if (label) { label += ': '; }
                        if (context.parsed !== null) {
                            label += context.parsed + '%';
                        }
                        return label;
                    }
                }
            }
        }
    };

    return (
        <section id="financials" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-secondary tracking-wider uppercase">{t('financials.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                        {t('financials.title')}
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        {t('financials.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-center">
                    {/* Chart */}
                    <div className="lg:col-span-3 p-8 glass-card" data-aos="fade-right">
                        <div className="h-96">
                            <Bar data={financialData} options={financialOptions} />
                        </div>
                    </div>
                    
                    {/* Metrics Table */}
                    <div className="lg:col-span-2 space-y-4" data-aos="fade-left">
                        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('financials.chart.year1Clinics')}</p>
                            <p className="text-2xl font-bold">
                                <span className="counter" data-target="100">100</span>
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('financials.chart.year2Clinics')}</p>
                            <p className="text-2xl font-bold">
                                <span className="counter" data-target="500">500</span>
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('financials.chart.year3Clinics')}</p>
                            <p className="text-2xl font-bold">
                                <span className="counter" data-target="1500">1500</span>
                            </p>
                        </div>
                        <div className="p-6 rounded-lg bg-gradient-to-r from-primary/80 to-secondary/80 text-white">
                            <p className="text-sm opacity-80">{t('financials.chart.year3Revenue')}</p>
                            <p className="text-3xl font-bold">
                                $<span className="counter" data-target="5.5" data-decimal="1">5.5</span> {t('financials.chart.million')}
                            </p>
                        </div>
                    </div>
                </div>
  
            </div>
        </section>
    );
};

export default Financials; 