import type { Metadata } from 'next';
import GlobalNavigation from '@/components/layout/GlobalNavigation';
import Footer from '@/components/layout/Footer';
import LaunchingSoon from '@/components/ui/LaunchingSoon';

export const metadata: Metadata = {
    title: 'Courses - QuantumUdit | Applied Analytics & AI',
    description: 'Professional courses and learning paths for analytics and AI. Coming soon.',
};

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark flex flex-col">
            <GlobalNavigation />
            <main className="flex-grow pt-20">
                <LaunchingSoon
                    title="Courses"
                    description="Comprehensive course offerings and learning paths designed to master analytics, AI, and data engineering."
                    targetDate="Q2 2026"
                />
            </main>
            <Footer />
        </div>
    );
}
