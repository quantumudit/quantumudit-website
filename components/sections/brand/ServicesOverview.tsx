import Link from 'next/link';
import servicesData from '@/data/services.json';
import { BarChart3, Brain, Database, LineChart } from 'lucide-react';

// Icon mapping
const iconMap: { [key: string]: any } = {
    BarChart3,
    Brain,
    Database,
    LineChart,
};

export default function ServicesOverview() {
    return (
        <section className="py-20 bg-white dark:bg-neutral-dark/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-quantum-blue dark:text-white mb-16 text-center font-montserrat">
                    Applied Analytics & AI
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.services.map((service) => {
                        const Icon = iconMap[service.icon] || BarChart3;

                        return (
                            <div key={service.id} className="p-8 rounded-xl bg-neutral-light dark:bg-gray-800/50 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-200 dark:border-gray-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-quantum-blue dark:text-blue-400">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-montserrat">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
