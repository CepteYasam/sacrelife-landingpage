"use client";

import { useTranslation } from '@/app/i18n/client';

interface ProblemProps {
    lang: string;
}

const Problem = ({ lang }: ProblemProps) => {
    const { t } = useTranslation(lang, 'common');

    const problems = [
        {
            id: 1,
            title: t('problem.problems.1.title'),
            description: t('problem.problems.1.description'),
            solution: t('problem.problems.1.solution')
        },
        {
            id: 2,
            title: t('problem.problems.2.title'),
            description: t('problem.problems.2.description'),
            solution: t('problem.problems.2.solution')
        },
        {
            id: 3,
            title: t('problem.problems.3.title'),
            description: t('problem.problems.3.description'),
            solution: t('problem.problems.3.solution')
        },
        {
            id: 4,
            title: t('problem.problems.4.title'),
            description: t('problem.problems.4.description'),
            solution: t('problem.problems.4.solution')
        },
        {
            id: 5,
            title: t('problem.problems.5.title'),
            description: t('problem.problems.5.description'),
            solution: t('problem.problems.5.solution')
        },
        {
            id: 6,
            title: t('problem.problems.6.title'),
            description: t('problem.problems.6.description'),
            solution: t('problem.problems.6.solution')
        },
        {
            id: 7,
            title: t('problem.problems.7.title'),
            description: t('problem.problems.7.description'),
            solution: t('problem.problems.7.solution')
        },
        {
            id: 8,
            title: t('problem.problems.8.title'),
            description: t('problem.problems.8.description'),
            solution: t('problem.problems.8.solution')
        },
        {
            id: 9,
            title: t('problem.problems.9.title'),
            description: t('problem.problems.9.description'),
            solution: t('problem.problems.9.solution')
        },
        {
            id: 10,
            title: t('problem.problems.10.title'),
            description: t('problem.problems.10.description'),
            solution: t('problem.problems.10.solution')
        }
    ];

    return (
        <section id="problem" className="py-20 sm:py-32 bg-white dark:bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-secondary tracking-wider uppercase">{t('problem.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                        {t('problem.title')}
                    </p>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        {t('problem.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {problems.map((problem, index) => (
                        <div key={problem.id} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700" data-aos="fade-up" data-aos-delay={index * 50}>
                            <h4 className="font-bold text-lg mb-2 text-red-600 dark:text-red-400">
                                {problem.id}. {t('problem.problemLabel')} {problem.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                                {problem.description}
                            </p>
                            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                                <p className="font-semibold text-green-800 dark:text-green-300">{t('problem.solutionLabel')}</p>
                                <p className="text-sm text-green-700 dark:text-green-400">
                                    {problem.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem; 