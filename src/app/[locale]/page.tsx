"use client";
import { useState, lazy, Suspense } from 'react';
import { useParams } from 'next/navigation';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";

import Investment from "@/components/Investment";
import Footer from "@/components/Footer";
import InvestmentModal from '@/components/InvestmentModal';
import ContactModal from '@/components/ContactModal';
import ClientProviders from '@/components/ClientProviders';

// Lazy load büyük component'ler
const LazyFeatures = lazy(() => import("@/components/LazyFeatures"));
const LazyRoadmap = lazy(() => import("@/components/Roadmap"));
const LazyMarket = lazy(() => import("@/components/Market"));
const LazyCompetition = lazy(() => import("@/components/Competition"));
const LazyFinancials = lazy(() => import("@/components/Financials"));
const LazyTeam = lazy(() => import("@/components/Team"));

export default function LocalePage() {
  const params = useParams();
  const locale = params.locale as string;
  
  const [isInvestmentModalOpen, setInvestmentModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openInvestmentModal = () => setInvestmentModalOpen(true);
  const closeInvestmentModal = () => setInvestmentModalOpen(false);

  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  return (
    <ClientProviders>
      <Header onInvestmentClick={openInvestmentModal} />
      <main>
        <Hero lang={locale} onInvestmentClick={openInvestmentModal} />
        <WhyNow lang={locale} />
        <Problem lang={locale} />
        <Solution lang={locale} />
        <Suspense fallback={
            <div className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <div className="animate-pulse">
                            <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
                            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        }>
            <LazyFeatures lang={locale} />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Yükleniyor...</div>}>
            <LazyRoadmap lang={locale} />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Yükleniyor...</div>}>
            <LazyMarket lang={locale} />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Yükleniyor...</div>}>
            <LazyCompetition lang={locale} />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Yükleniyor...</div>}>
            <LazyFinancials lang={locale} />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Yükleniyor...</div>}>
            <LazyTeam lang={locale} />
        </Suspense>
        <Investment lang={locale} onContactClick={openContactModal} />
        <Footer lang={locale} />
      </main>
      <InvestmentModal 
        isOpen={isInvestmentModalOpen} 
        onClose={closeInvestmentModal} 
        onContactOpen={openContactModal}
        lang={locale}
      />
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        lang={locale}
      />
    </ClientProviders>
  );
} 