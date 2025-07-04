import './globals.css';
import { ReactNode } from 'react';
import { Domine, Inter } from 'next/font/google';
import { Metadata } from 'next';

const domine = Domine({ subsets: ['latin'], variable: '--font-domine', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'TOMO',
  description: 'Freshly pressed. Maltese soul, Italian heart.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${domine.variable} ${inter.variable}`}> 
      <body>{children}</body>
    </html>
  );
}
