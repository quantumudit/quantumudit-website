import { Reveal } from '@/components/ui/reveal';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SkillBadge from '@/components/portfolio/SkillBadge';
import { getSkills, getSkillsCount } from '@/lib/data';

export default function SkillsSection() {
    const skills = getSkills();
    const totalSkills = getSkillsCount();

    return (
        <section
            id="skills"
            className="py-20 bg-white dark:bg-gray-800"
        >
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for data science, machine learning, and analytics
                    </p>
                    <div className="mt-4">
                        <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                            {totalSkills} Skills across {skills.length} categories
                        </span>
                    </div>
                </div>

                <Separator className="mb-12" />

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category, idx) => (
                        <Reveal key={category.category} delay={idx * 100}>
                            <Card
                                key={category.category}
                                className="hover:shadow-lg transition-shadow duration-300"
                            >
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        <span className="text-lg">{category.category}</span>
                                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                            {category.items.length} skills
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill) => (
                                            <SkillBadge
                                                key={skill}
                                                skill={skill}
                                                category={category.category}
                                            />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                {/* Optional: Skills Summary */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                        Continuously learning and expanding my technical toolkit
                    </p>
                </div>

            </div>
        </section>
    );
}