import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Certification } from '@/types/portfolio';

interface CertificationCardProps {
    certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const isExpired = certification.expiryDate && new Date(certification.expiryDate) < new Date();

    return (
        <Card className={`hover:shadow-lg transition-shadow ${isExpired ? 'opacity-70' : ''}`}>
            <CardHeader>
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <CardTitle className="text-lg">{certification.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-sm mb-2">
                            <Award className="w-4 h-4" />
                            <span>{certification.issuer}</span>
                        </CardDescription>
                        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <Calendar className="w-3 h-3" />
                            <span>Issued: {formatDate(certification.date)}</span>
                            {certification.expiryDate && (
                                <>
                                    <span>•</span>
                                    <span className={isExpired ? 'text-red-600 dark:text-red-400' : ''}>
                                        Expires: {formatDate(certification.expiryDate)}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                    <Badge variant={isExpired ? 'destructive' : 'default'} className="text-xs">
                        {isExpired ? 'Expired' : 'Active'}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent>
                {/* Skills */}
                {certification.skills && certification.skills.length > 0 && (
                    <div className="mb-3">
                        <div className="flex flex-wrap gap-1.5">
                            {certification.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Credential Link */}
                {certification.credentialUrl && (
                    <Button variant="outline" size="sm" asChild className="w-full">
                        <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-2" />
                            View Credential
                        </a>
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}