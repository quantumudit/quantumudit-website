import GlobalNavigation from '@/components/layout/GlobalNavigation';
import Footer from '@/components/layout/Footer';
import BrandHero from '@/components/sections/brand/BrandHero';
import ServicesOverview from '@/components/sections/brand/ServicesOverview';
import TrustSection from '@/components/sections/brand/TrustSection';
import FeaturedWorkSection from '@/components/sections/brand/FeaturedWorkSection';

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
