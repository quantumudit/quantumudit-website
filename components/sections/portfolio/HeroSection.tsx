'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { getProfile, getYearsOfExperience } from '@/lib/data';

export default function HeroSection() {
    const profile = getProfile();
    const yearsExp = getYearsOfExperience();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Availability Badge */}
                    {profile.availability && (
                        <div className="mb-6 animate-fade-in">
                            <Badge
                                variant="outline"
                                className="px-4 py-1.5 text-sm border-green-500 text-green-700 dark:text-green-400"
                            >
                                <span className="mr-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                {profile.availability.message}
                            </Badge>
                        </div>
                    )}

                    {/* Name */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
                        {profile.name}
                    </h1>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-6 animate-fade-in-up animation-delay-200">
                        {profile.title}
                    </h2>

                    {/* Bio */}
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                        {profile.bio}
                    </p>

                    {/* Years of Experience */}
                    <p className="text-md text-gray-500 dark:text-gray-500 mb-8 animate-fade-in-up animation-delay-500">
                        {yearsExp}+ years of experience in data science and analytics
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up animation-delay-600">
                        <Button
                            size="lg"
                            onClick={() => scrollToSection('projects')}
                            className="min-w-[200px] group"
                        >
                            View My Work
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => scrollToSection('contact')}
                            className="min-w-[200px]"
                        >
                            Get In Touch
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-700">
                        {profile.social.github && (
                            <a
                                href={profile.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                        )}

                        {profile.social.linkedin && (
                            <a
                                href={profile.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}

                        {profile.social.email && (
                            <a
                                href={`mailto:${profile.social.email}`}
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
                            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}