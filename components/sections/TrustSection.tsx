import Link from 'next/link';
import certificationsData from '@/data/certifications.json';
import profileData from '@/data/profile.json';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TrustSection() {
    // Filter for key certifications to display
    const keyCerts = certificationsData.certifications.slice(0, 3);

    return (
        <section className="py-20 bg-neutral-light dark:bg-gray-900/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-quantum-blue dark:text-white mb-6 font-montserrat">
                        Why Trust Udit?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Proven expertise backed by global standards and real-world impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Signal 1: Experience */}
                    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-quantum-blue dark:text-blue-400">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-montserrat">8+ Years Experience</h3>
                        <p className="text-gray-600 dark:text-gray-400">Delivering analytics solutions for Fortune 500 clients including Deloitte and PwC.</p>
                    </div>

                    {/* Signal 2: Certified */}
                    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-quantum-blue dark:text-blue-400">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-montserrat">13+ Certifications</h3>
                        <p className="text-gray-600 dark:text-gray-400">Official validations from Microsoft, AWS, and Google.</p>
                    </div>

                    {/* Signal 3: Results */}
                    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-quantum-blue dark:text-blue-400">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-montserrat">Outcome Focused</h3>
                        <p className="text-gray-600 dark:text-gray-400">Specializing in solutions that drive measurable business value.</p>
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for Logos - using text for now or could import images if available */}
                    {keyCerts.map(cert => (
                        <div key={cert.id} className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                            <Award className="w-4 h-4 text-quantum-blue" />
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{cert.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
