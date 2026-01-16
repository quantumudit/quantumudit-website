import Navigation from '@/components/layout/PortfolioNavigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/portfolio/HeroSection';
import SkillsSection from '@/components/sections/portfolio/SkillsSection';
import ProjectsSection from '@/components/sections/portfolio/ProjectsSection';
import AboutSection from '@/components/sections/portfolio/AboutSection';
import ContactSection from '@/components/sections/portfolio/ContactSection';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

export default function Home() {
  return (
    <>

      <Navigation />

      <main id="main-content">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}