import type { Metadata } from 'next';
import GlobalNavigation from '@/components/layout/GlobalNavigation';
import Footer from '@/components/layout/Footer';
import LaunchingSoon from '@/components/ui/LaunchingSoon';

export const metadata: Metadata = {
    title: 'Services - QuantumUdit | Applied Analytics & AI',
    description: 'Professional analytics and AI consulting services. Coming soon.',
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark flex flex-col">
            <GlobalNavigation />
            <main className="flex-grow pt-20">
                <LaunchingSoon
                    title="Services"
                    description="Explore comprehensive analytics and AI consulting services tailored to transform your business data into strategic advantages."
                    targetDate="Q2 2026"
                />
            </main>
            <Footer />
        </div>
    );
}
