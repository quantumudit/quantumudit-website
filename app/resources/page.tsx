import type { Metadata } from 'next';
import GlobalNavigation from '@/components/layout/GlobalNavigation';
import Footer from '@/components/layout/Footer';
import LaunchingSoon from '@/components/ui/LaunchingSoon';

export const metadata: Metadata = {
    title: 'Resources - QuantumUdit | Applied Analytics & AI',
    description: 'Free resources, guides, and tools for analytics and AI professionals. Coming soon.',
};

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark flex flex-col">
            <GlobalNavigation />
            <main className="flex-grow pt-20">
                <LaunchingSoon
                    title="Resources"
                    description="Access curated guides, templates, and tools to accelerate your analytics and AI projects."
                    targetDate="Q2 2026"
                />
            </main>
            <Footer />
        </div>
    );
}
