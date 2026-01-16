import GlobalNavigation from '@/components/layout/GlobalNavigation';
import Footer from '@/components/layout/Footer';
import BrandHero from '@/components/sections/BrandHero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import TrustSection from '@/components/sections/TrustSection';
import FeaturedWorkSection from '@/components/sections/FeaturedWorkSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark flex flex-col font-open-sans">
            <GlobalNavigation />

            <main className="flex-grow pt-20">
                <BrandHero />
                <TrustSection />
                <ServicesOverview />
                <FeaturedWorkSection />
            </main>

            <Footer />
        </div>
    );
}
