import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BrandHero() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-quantum-blue dark:text-white mb-6 font-montserrat leading-tight">
                        Quiet Intelligence that <span className="text-accent-blue">Delivers Outcomes</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                        I help businesses transform complex data into clear, actionable strategies through Applied Analytics and AI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="text-lg px-8 bg-quantum-blue hover:bg-quantum-blue/90 text-white">
                            <Link href="/portfolio">
                                View Portfolio <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="text-lg px-8 border-quantum-blue text-quantum-blue hover:bg-blue-50 dark:border-white dark:text-white dark:hover:bg-white/10">
                            <Link href="/services">
                                Explore Services
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 dark:opacity-5">
                <div className="absolute right-0 top-1/4 w-96 h-96 bg-quantum-blue rounded-full blur-3xl filter" />
                <div className="absolute right-1/4 top-1/2 w-64 h-64 bg-accent-blue rounded-full blur-3xl filter" />
            </div>
        </section>
    );
}
