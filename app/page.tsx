import Navigation from '@/components/layout/Navigation';
import { getProfile, getQuickStats } from '@/lib/data';

export default function Home() {
  const profile = getProfile();
  const stats = getQuickStats();

  return (
    <>
      <Navigation />

      <main className="pt-16"> {/* Padding for fixed navbar */}

        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {profile.name}
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-8">
              {profile.title}
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {profile.bio}
            </p>
          </div>
        </section>

        {/* Skills Section Placeholder */}
        <section id="skills" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Skills section coming in Lab 9
            </p>
          </div>
        </section>

        {/* Projects Section Placeholder */}
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Projects section coming in Lab 10
            </p>
          </div>
        </section>

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