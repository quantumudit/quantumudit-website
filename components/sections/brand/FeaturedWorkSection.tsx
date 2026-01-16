import Link from 'next/link';
import projectsData from '@/data/portfolio/projects.json';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedWorkSection() {
    // Get featured projects (limit to 3)
    const featuredProjects = projectsData.projects
        .filter(p => p.featured)
        .slice(0, 3);

    return (
        <section className="py-20 bg-white dark:bg-neutral-dark">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold text-quantum-blue dark:text-white mb-4 font-montserrat">
                            Featured Work
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            A selection of projects demonstrating applied analytics and engineering capabilities.
                        </p>
                    </div>
                    <Button asChild variant="ghost" className="hidden md:inline-flex text-quantum-blue hover:text-quantum-blue/80 dark:text-blue-400">
                        <Link href="/portfolio">
                            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="group bg-neutral-light dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800">
                                    {/* Fallback if no image */}
                                    <span className="text-sm font-medium">Project Preview</span>
                                </div>
                                {/* Actual Image if available */}
                                {/* <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /> */}
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-montserrat group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs font-medium bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Live Demo">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center md:hidden">
                    <Button asChild variant="outline">
                        <Link href="/portfolio">
                            View Portfolio
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
