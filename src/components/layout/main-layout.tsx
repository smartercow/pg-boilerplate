'use client';
import { LayoutProps } from '@app/layout';
import AuthModal from '@components/modal/auth-modal';
import Footer from '@components/site/footer/footer';
import Header from '@components/site/header/header';
import { WindowContextProvider } from '@lib/context/window-context';
import { RecoilRoot } from 'recoil';

export default function LayoutMain({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <WindowContextProvider>
        <RecoilRoot>
          <>
            <Header />
            <main className='extent min-h-[85vh]'>{children}</main>
            <Footer />
          </>
          <>
            <AuthModal />
          </>
        </RecoilRoot>
      </WindowContextProvider>
    </>
  );
}
