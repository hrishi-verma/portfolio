import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import HeroArt from '@/components/HeroArt';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/contexts/ThemeContext';
import CustomCursor from '@/components/CustomCursor';
import SystemStatus from '@/components/SystemStatus';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hrishikeshverma.com'),
  title: 'Hrishikesh Verma | Software Developer',
  description: "Full-stack developer and master's student specializing in algorithms, machine learning, and scalable systems. Currently at University of Utah.",
  keywords: ['software developer', 'full-stack developer', 'machine learning', 'algorithms', 'Next.js', 'React', 'Spring Boot'],
  authors: [{ name: 'Hrishikesh Verma' }],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon.png',
    api: '/favicon.png',
  },
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
      <body className={`${jakarta.className} antialiased bg-gray-950 text-white transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider>
          <CustomCursor />
          <HeroArt />
          <Navbar />
          <SystemStatus />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
