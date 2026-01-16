import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';

interface LaunchingSoonProps {
    title: string;
    description?: string;
    targetDate?: string;
}

export default function LaunchingSoon({
    title,
    description = "This section is currently under development and will be available soon.",
    targetDate
}: LaunchingSoonProps) {
    return (
        <section className="min-h-screen flex items-center justify-center bg-neutral-light dark:bg-neutral-dark">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Icon */}
                    <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Clock className="w-12 h-12 text-quantum-blue dark:text-blue-400" />
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-quantum-blue dark:text-white mb-6 font-montserrat">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {description}
                    </p>

                    {/* Target Date (if provided) */}
                    {targetDate && (
                        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
                            Expected Launch: <span className="font-semibold text-quantum-blue dark:text-blue-400">{targetDate}</span>
                        </p>
                    )}

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-quantum-blue hover:bg-quantum-blue/90 text-white">
                            <Link href="/">
                                <ArrowLeft className="mr-2 w-5 h-5" />
                                Back to Homepage
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-quantum-blue text-quantum-blue hover:bg-blue-50 dark:border-white dark:text-white dark:hover:bg-white/10">
                            <Link href="/portfolio">
                                View Portfolio
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
