import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Udit Chatterjee | Data Scientist & ML Engineer',
  description: 'Portfolio website of Udit Chatterjee - Data Scientist, Machine Learning Engineer, and Analytics Expert. Showcasing projects in data science, machine learning, and big data analytics.',
  keywords: ['Data Science', 'Machine Learning', 'Python', 'Analytics', 'Portfolio', 'Udit Chatterjee'],
  authors: [{ name: 'Udit Chatterjee' }],
  creator: 'Udit Chatterjee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantumudit.com',
    siteName: 'Udit Chatterjee Portfolio',
    title: 'Udit Chatterjee | Data Scientist & ML Engineer',
    description: 'Portfolio showcasing data science and machine learning projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Udit Chatterjee | Data Scientist & ML Engineer',
    description: 'Portfolio showcasing data science and machine learning projects',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}