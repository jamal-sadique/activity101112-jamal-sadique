import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import ThemeSwitch from '@/app/ui/theme-switch';
import { ClientThemeWrapper, ThemeProvider } from '@/app/lib/theme-context';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ClientThemeWrapper>
            {children}
            <ThemeSwitch />
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}