import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';
import { Experience } from '@/types/portfolio';

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const formatDate = (date: string) => {
        if (date === 'Present') return 'Present';
        return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const getDuration = () => {
        const start = new Date(experience.startDate);
        const end = experience.endDate === 'Present' ? new Date() : new Date(experience.endDate);
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        if (years > 0 && remainingMonths > 0) return `${years}y ${remainingMonths}m`;
        if (years > 0) return `${years}y`;
        return `${remainingMonths}m`;
    };

    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{experience.position}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-base mb-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-semibold">{experience.company}</span>
                            {experience.location && (
                                <>
                                    <span>•</span>
                                    <span>{experience.location}</span>
                                </>
                            )}
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
                            <span>•</span>
                            <span>{getDuration()}</span>
                        </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                        {experience.type}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent>
                {/* Responsibilities */}
                {experience.responsibilities && experience.responsibilities.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Key Responsibilities
                        </h4>
                        <ul className="space-y-1.5">
                            {experience.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{responsibility}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Key Achievements
                        </h4>
                        <ul className="space-y-1.5">
                            {experience.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                    <span className="mr-2">✓</span>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {experience.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}