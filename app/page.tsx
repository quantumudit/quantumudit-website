import { getProfile, getSkills, getFeaturedProjects } from '@/lib/data';

export default function Home() {
  // Now using typed helper functions!
  const profile = getProfile();
  const categories = getSkills();
  const projectList = getFeaturedProjects();

  const { name, title, bio } = profile;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="container mx-auto max-w-6xl">

        {/* Profile Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {name}
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
            {title}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {bio}
          </p>

          {/* Type-safe access to nested properties */}
          <div className="mt-4 flex gap-4">
            <a
              href={profile.social.github}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Skills Section - with type safety */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills ({categories.length} categories)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {category.category}
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {category.items.slice(0, 3).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                  {category.items.length > 3 && (
                    <li className="text-blue-600">
                      +{category.items.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section - with type safety */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectList
              .filter(project => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-transparent hover:border-blue-500 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </section>

      </div>
    </main>
  );
}