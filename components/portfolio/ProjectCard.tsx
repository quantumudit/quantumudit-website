import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const getStatusColor = (status: string) => {
        const colors: { [key: string]: string } = {
            'completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
            'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
            'planned': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
        };
        return colors[status] || colors['planned'];
    };

    return (
        <Card className={`flex flex-col h-full hover:shadow-xl transition-all duration-300 ${project.featured ? 'ring-2 ring-blue-500' : ''}`}>
            <CardHeader>
                <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.featured && (
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    )}
                </div>
                <div className="flex items-center gap-2 mb-3">
                    <Badge className={getStatusColor(project.status)} variant="secondary">
                        {project.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                        {project.category}
                    </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
                {/* Technologies */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 6).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 6 && (
                            <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 6} more
                            </Badge>
                        )}
                    </div>
                </div>

                {/* Key Metrics */}
                {project.metrics && Object.keys(project.metrics).length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Key Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="bg-gray-50 dark:bg-gray-800 p-2 rounded-md"
                                >
                                    <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                                        {key.replace(/_/g, ' ')}
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Highlights
                        </h4>
                        <ul className="space-y-1">
                            {project.highlights.slice(0, 3).map((highlight, idx) => (
                                <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </CardContent>

            <CardFooter className="flex gap-2 pt-4 border-t">
                {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                        </a>
                    </Button>
                )}
                {project.demoUrl && (
                    <Button variant="default" size="sm" asChild className="flex-1">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                        </a>
                    </Button>
                )}
                {!project.githubUrl && !project.demoUrl && (
                    <Button variant="ghost" size="sm" disabled className="flex-1">
                        Coming Soon
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}