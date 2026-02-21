// app/layout.tsx
import { ReactNode } from 'react';
import Providers from './providers';
import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Yudai Mori | moodai',
  description: 'ソフトウェア開発者。AI時代のクリエイター保護インフラを開発中。大阪大学基礎工学部2026年卒。',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    title: 'Yudai Mori | moodai',
    description: 'ソフトウェア開発者。AI時代のクリエイター保護インフラを開発中。',
    images: ['/icon.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Yudai Mori | moodai',
    description: 'ソフトウェア開発者。AI時代のクリエイター保護インフラを開発中。',
    images: ['/icon.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}