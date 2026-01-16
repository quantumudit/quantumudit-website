import type { Metadata } from 'next';
import GlobalNavigation from '@/components/layout/GlobalNavigation';
import Footer from '@/components/layout/Footer';
import LaunchingSoon from '@/components/ui/LaunchingSoon';

export const metadata: Metadata = {
    title: 'Blog - QuantumUdit | Applied Analytics & AI',
    description: 'Insights and tutorials on analytics, AI, and data engineering. Coming soon.',
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark flex flex-col">
            <GlobalNavigation />
            <main className="flex-grow pt-20">
                <LaunchingSoon
                    title="Blog"
                    description="Practical insights, tutorials, and case studies on analytics, AI, and data engineering."
                    targetDate="Q2 2026"
                />
            </main>
            <Footer />
        </div>
    );
}
