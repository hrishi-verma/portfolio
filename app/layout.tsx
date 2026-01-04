import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeroArt from '@/components/HeroArt';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hrishikesh Verma | Software Developer',
  description: "Full-stack developer and master's student specializing in algorithms, machine learning, and scalable systems. Currently at University of Utah.",
  keywords: ['software developer', 'full-stack developer', 'machine learning', 'algorithms', 'Next.js', 'React', 'Spring Boot'],
  authors: [{ name: 'Hrishikesh Verma' }],
  openGraph: {
    title: 'Hrishikesh Verma | Software Developer',
    description: 'Full-stack developer specializing in algorithms, machine learning, and scalable systems',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased bg-gray-950 text-white transition-colors duration-300`}>
        <ThemeProvider>
          <HeroArt />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
