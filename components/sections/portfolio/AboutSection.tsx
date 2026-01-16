import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ExperienceCard from '@/components/portfolio/ExperienceCard';
import EducationCard from '@/components/portfolio/EducationCard';
import CertificationCard from '@/components/portfolio/CertificationCard';
import { getExperience, getEducation, getCertifications } from '@/lib/data';

export default function AboutSection() {
    const experience = getExperience();
    const education = getEducation();
    const certifications = getCertifications();

    return (
        <section
            id="about"
            className="py-20 bg-white dark:bg-gray-800"
        >
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My professional journey, educational background, and continuous learning
                    </p>
                </div>

                <Separator className="mb-12" />

                {/* Tabs */}
                <Tabs defaultValue="experience" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 max-w-[600px] mx-auto mb-12">
                        <TabsTrigger value="experience">
                            Experience ({experience.length})
                        </TabsTrigger>
                        <TabsTrigger value="education">
                            Education ({education.length})
                        </TabsTrigger>
                        <TabsTrigger value="certifications">
                            Certifications ({certifications.length})
                        </TabsTrigger>
                    </TabsList>

                    {/* Experience Tab */}
                    <TabsContent value="experience">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {experience.map((exp) => (
                                <ExperienceCard key={exp.company + exp.position} experience={exp} />
                            ))}
                        </div>
                    </TabsContent>

                    {/* Education Tab */}
                    <TabsContent value="education">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {education.map((edu) => (
                                <EducationCard key={edu.institution + edu.degree} education={edu} />
                            ))}
                        </div>
                    </TabsContent>

                    {/* Certifications Tab */}
                    <TabsContent value="certifications">
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {certifications.map((cert) => (
                                <CertificationCard key={cert.name + cert.issuer} certification={cert} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

            </div>
        </section>
    );
}