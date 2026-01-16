import GlobalNavigation from '@/components/layout/GlobalNavigation';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Brain, Database, LineChart } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark flex flex-col font-open-sans">
            <GlobalNavigation />

            <main className="flex-grow pt-20">
                {/* Hero Section */}
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

                {/* Value Proposition / What I Do */}
                <section className="py-20 bg-white dark:bg-neutral-dark/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-quantum-blue dark:text-white mb-16 text-center font-montserrat">
                            Applied Analytics & AI
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Card 1 */}
                            <div className="p-8 rounded-xl bg-neutral-light dark:bg-gray-800/50 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-200 dark:border-gray-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-quantum-blue dark:text-blue-400">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-montserrat">Analytics Strategy</h3>
                                <p className="text-gray-600 dark:text-gray-400">Turning raw data into a strategic asset with clear roadmaps and KPIs.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="p-8 rounded-xl bg-neutral-light dark:bg-gray-800/50 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-200 dark:border-gray-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-quantum-blue dark:text-blue-400">
                                    <Brain className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-montserrat">AI & ML Solutions</h3>
                                <p className="text-gray-600 dark:text-gray-400">Deploying practical machine learning models that solve real business problems.</p>
                            </div>

                            {/* Card 3 */}
                            <div className="p-8 rounded-xl bg-neutral-light dark:bg-gray-800/50 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-200 dark:border-gray-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-quantum-blue dark:text-blue-400">
                                    <Database className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-montserrat">Data Engineering</h3>
                                <p className="text-gray-600 dark:text-gray-400">Building robust, scalable pipelines to ensure data quality and availability.</p>
                            </div>

                            {/* Card 4 */}
                            <div className="p-8 rounded-xl bg-neutral-light dark:bg-gray-800/50 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-200 dark:border-gray-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-quantum-blue dark:text-blue-400">
                                    <LineChart className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-montserrat">BI & Visualization</h3>
                                <p className="text-gray-600 dark:text-gray-400">Creating intuitive dashboards that drive faster, better decision making.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
