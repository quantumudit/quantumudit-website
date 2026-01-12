import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />
        <SkillsSection />

        {/* Projects Section - replaces placeholder */}
        <ProjectsSection />

        {/* About Section Placeholder */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              About section coming in Lab 11
            </p>
          </div>
        </section>

        {/* Contact Section Placeholder */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Contact section coming in Lab 12
            </p>
          </div>
        </section>

      </main>
    </>
  );
}