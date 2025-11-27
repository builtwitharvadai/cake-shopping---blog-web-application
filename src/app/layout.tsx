import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cake Shopping & Blog',
  description:
    'Discover delicious cakes and read our latest baking tips and recipes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}