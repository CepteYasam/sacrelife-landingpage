"use client";

import { useTranslation } from '@/app/i18n/client';

interface TeamProps {
    lang: string;
}

const Team = ({ lang }: TeamProps) => {
    const { t } = useTranslation(lang, 'common');

    const teamMembers = [
        {
            name: t('team.members.ceo.name'),
            role: t('team.members.ceo.role'),
            description: t('team.members.ceo.description'),
            image: "https://placehold.co/200x200/0d9488/FFFFFF?text=CEO",
            color: "ring-primary/50"
        },
        {
            name: t('team.members.cto.name'),
            role: t('team.members.cto.role'),
            description: t('team.members.cto.description'),
            image: "https://placehold.co/200x200/2563eb/FFFFFF?text=CTO",
            color: "ring-secondary/50"
        },
        {
            name: t('team.members.cmo.name'),
            role: t('team.members.cmo.role'),
            description: t('team.members.cmo.description'),
            image: "https://placehold.co/200x200/7c3aed/FFFFFF?text=CMO",
            color: "ring-purple-500/50"
        }
    ];

    const roleColors = {
        [t('team.members.ceo.role')]: "text-primary",
        [t('team.members.cto.role')]: "text-secondary", 
        [t('team.members.cmo.role')]: "text-purple-500"
    };

    return (
        <section id="team" className="py-20 sm:py-32 bg-white dark:bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-base font-semibold text-primary tracking-wider uppercase">{t('team.sectionTitle')}</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                        {t('team.title')}
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        {t('team.subtitle')}
                    </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                            <img 
                                className={`w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg ring-4 ${member.color}`}
                                src={member.image}
                                alt={`${member.role} ${t('team.photoAlt')}`}
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = 'https://placehold.co/200x200/cccccc/FFFFFF?text=' + member.role.split(' ')[2];
                                }}
                            />
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className={`font-semibold ${roleColors[member.role as keyof typeof roleColors]}`}>
                                {member.role}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team; 