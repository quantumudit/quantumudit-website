import type { Metadata } from 'next';
import GlobalNavigation from '@/components/layout/GlobalNavigation';
import Footer from '@/components/layout/Footer';
import LaunchingSoon from '@/components/ui/LaunchingSoon';

export const metadata: Metadata = {
    title: 'Training - QuantumUdit | Applied Analytics & AI',
    description: 'Professional training programs for analytics, Power BI, and AI. Coming soon.',
};

export default function TrainingPage() {
    return (
        <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark flex flex-col">
            <GlobalNavigation />
            <main className="flex-grow pt-20">
                <LaunchingSoon
                    title="Training"
                    description="Hands-on training programs in Power BI, Python, Azure, and AI designed for professionals ready to upskill."
                    targetDate="Q2 2026"
                />
            </main>
            <Footer />
        </div>
    );
}
