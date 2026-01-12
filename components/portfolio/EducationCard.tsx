import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar } from 'lucide-react';
import { Education } from '@/types/portfolio';

interface EducationCardProps {
    education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <CardTitle className="text-xl">{education.degree}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-base mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span className="font-semibold">{education.institution}</span>
                    {education.location && (
                        <>
                            <span>•</span>
                            <span>{education.location}</span>
                        </>
                    )}
                </CardDescription>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(education.startDate)} - {formatDate(education.endDate)}</span>
                    {education.gpa && (
                        <>
                            <span>•</span>
                            <span className="font-semibold">GPA: {education.gpa}</span>
                        </>
                    )}
                </div>
            </CardHeader>

            <CardContent>
                {/* Coursework */}
                {education.coursework && education.coursework.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {education.coursework.map((course) => (
                                <Badge key={course} variant="outline" className="text-xs">
                                    {course}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Achievements */}
                {education.achievements && education.achievements.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Achievements
                        </h4>
                        <ul className="space-y-1.5">
                            {education.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                    <span className="mr-2">✓</span>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
