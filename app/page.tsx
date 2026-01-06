import profileData from '@/data/profile.json';
import skillsData from '@/data/skills.json';
import projectsData from '@/data/projects.json';

export default function Home() {
  const { name, title, bio } = profileData;
  const { categories } = skillsData;
  const { projects } = projectsData;

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
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills ({categories.length} categories)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {category.category}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.items.length} skills
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Projects ({projects.length} total)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}