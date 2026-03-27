import type { Metadata } from 'next';
import { IBM_Plex_Mono, Sora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Viktor Berg | Web, AI and automation',
  description:
    'Portfolio of Viktor Berg showing public web work, private AI systems, automation and future product ideas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${plexMono.variable}`}>
      <body suppressHydrationWarning className="bg-black font-sans text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
