import '@styles/globals.scss';
import '@styles/main.scss';
import LayoutMain from '@components/layout/main-layout';
import { isDevelopment } from '@utils/env';
import type { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'PG reuse template',
  description: 'PG reuse template'
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body className={`${isDevelopment ? 'debug-screens' : ''}`}>
        <LayoutMain>{children}</LayoutMain>
      </body>
    </html>
  );
}
