'use client';

import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { getProjects, getFeaturedProjects, getAllCategories } from '@/lib/data';

export default function ProjectsSection() {
    const allProjects = getProjects();
    const featuredProjects = getFeaturedProjects();
    const categories = getAllCategories();

    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

    // Filter projects
    const displayedProjects = allProjects.filter(project => {
        if (showFeaturedOnly && !project.featured) return false;
        if (selectedCategory !== 'all' && project.category !== selectedCategory) return false;
        return true;
    });

    return (
        <section
            id="projects"
            className="py-20 bg-gray-50 dark:bg-gray-900"
        >
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of data science and machine learning projects demonstrating
                        practical applications and measurable impact
                    </p>
                </div>

                <Separator className="mb-12" />

                {/* Filter Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    <Button
                        variant={selectedCategory === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory('all')}
                    >
                        All Projects ({allProjects.length})
                    </Button>

                    {categories.map((category) => {
                        const count = allProjects.filter(p => p.category === category).length;
                        return (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category} ({count})
                            </Button>
                        );
                    })}

                    <div className="w-full md:w-auto flex items-center justify-center md:ml-auto">
                        <Button
                            variant={showFeaturedOnly ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                        >
                            ⭐ Featured Only ({featuredProjects.length})
                        </Button>
                    </div>
                </div>

                {/* Projects Grid */}
                {displayedProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400">
                            No projects found for the selected filters.
                        </p>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                setSelectedCategory('all');
                                setShowFeaturedOnly(false);
                            }}
                            className="mt-4"
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}

                {/* View All Projects CTA */}
                {showFeaturedOnly && featuredProjects.length < allProjects.length && (
                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            onClick={() => setShowFeaturedOnly(false)}
                        >
                            View All {allProjects.length} Projects
                        </Button>
                    </div>
                )}

            </div>
        </section>
    );
}