// app/layout.tsx
import { ReactNode } from 'react';
import Providers from './providers';
import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Yudai Mori | moodai',
  description: 'ブロックチェーンとC2PA技術で世の中をより良くするプロダクトを作っています。大阪大学基礎工学部システム科学科4年。',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    title: 'Yudai Mori | moodai',
    description: 'ブロックチェーンとC2PA技術で世の中をより良くするプロダクトを作っています。',
    images: ['/icon.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Yudai Mori | moodai',
    description: 'ブロックチェーンとC2PA技術で世の中をより良くするプロダクトを作っています。',
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