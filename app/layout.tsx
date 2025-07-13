import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { TopMenu } from '@/components/ui/top-menu';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'JAX 53',
  description: 'JAX 53 - 2025 NFL Roster Builder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col font-[family-name:var(--font-geist-sans)]">
          <TopMenu />
          <main className=" flex-1 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 py-6 md:px-8">
            <p className="mb-4 text-center text-white text-xs md:text-base">
              Click on a player to add or remove them. Players with a red border
              are not on the roster.
            </p>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
