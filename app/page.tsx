import {
  getProfile,
  getQuickStats,
  getPortfolioStats,
  getFeaturedProjects,
  getAllTechnologies,
  searchProjects,
  getYearsOfExperience
} from '@/lib/data';

export default function Home() {
  const profile = getProfile();
  const quickStats = getQuickStats();
  const portfolioStats = getPortfolioStats();
  const featuredProjects = getFeaturedProjects();
  const technologies = getAllTechnologies();
  const yearsExp = getYearsOfExperience();

  // Test search
  const pythonProjects = searchProjects('Python');

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {profile.name}
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-2">
            {profile.title}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {yearsExp}+ years of experience
          </p>
        </section>

        {/* Quick Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {quickStats.yearsExperience}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {quickStats.projectsCompleted}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {quickStats.skillsCount}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Skills
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {quickStats.certificationsCount}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Certifications
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies ({technologies.length})
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Key Metrics */}
                {project.metrics && Object.keys(project.metrics).length > 0 && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-gray-500 dark:text-gray-400 capitalize">
                            {key}:
                          </span>
                          <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Search Test */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Python Projects ({pythonProjects.length})
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            {pythonProjects.length > 0 ? (
              <ul className="space-y-2">
                {pythonProjects.map(project => (
                  <li key={project.id} className="text-gray-900 dark:text-white">
                    • {project.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                No Python projects found
              </p>
            )}
          </div>
        </section>

        {/* Portfolio Stats (Debugging) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Portfolio Statistics
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <pre className="text-xs text-gray-900 dark:text-white overflow-auto">
              {JSON.stringify(portfolioStats, null, 2)}
            </pre>
          </div>
        </section>

      </div>
    </main>
  );
}