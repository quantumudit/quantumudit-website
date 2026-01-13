import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { getProfile } from '@/lib/data';

export default function Footer() {
    const profile = getProfile();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-12">

                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">

                    {/* About Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {profile.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {profile.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            Building data-driven solutions and sharing knowledge with the community.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#home"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Connect
                        </h3>
                        <div className="flex gap-4">
                            {profile.social.github && (
                                <a
                                    href={profile.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {profile.social.linkedin && (
                                <a
                                    href={profile.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            {profile.social.email && (
                                <a
                                    href={`mailto:${profile.social.email}`}
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                                    aria-label="Email"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                </div>

                <Separator className="my-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <p>
                        © {currentYear} {profile.name}. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1">
                        Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using Next.js & Tailwind CSS
                    </p>
                </div>

            </div>
        </footer>
    );
}