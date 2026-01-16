import Navigation from '@/components/layout/PortfolioNavigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
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