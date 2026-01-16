import type { Metadata } from 'next';
import { Montserrat, Open_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'QuantumUdit | Applied Analytics & AI',
  description: 'QuantumUdit is a professional brand for Applied Analytics, Business Intelligence, and AI Enablement. Helping teams and professionals make better decisions.',
  keywords: ['Applied Analytics', 'Business Intelligence', 'AI Enablement', 'Power BI', 'Training', 'Consulting', 'QuantumUdit'],
  authors: [{ name: 'Udit Chatterjee' }],
  creator: 'Udit Chatterjee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantumudit.com',
    siteName: 'QuantumUdit',
    title: 'QuantumUdit | Applied Analytics & AI',
    description: 'Applied Analytics, Business Intelligence, and AI Enablement by Udit Chatterjee.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumUdit | Applied Analytics & AI',
    description: 'Applied Analytics, Business Intelligence, and AI Enablement by Udit Chatterjee.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} ${jetbrainsMono.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}