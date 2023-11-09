import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Rest',
  description: 'Generate your rest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/your_logo.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
