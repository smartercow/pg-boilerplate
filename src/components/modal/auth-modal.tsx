import Modal from './modal';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useSession } from '@supabase/auth-helpers-react';
import { AuthModalState } from '@lib/state/auth-state';
import AuthLogin from '../site/auth/signin-auth';
import AuthResetPassword from '../site/auth/resetpassword-auth';
import AuthSignUp from '../site/auth/signup-auth';
import { HeroIcon } from '@components/ui/icons/hero-icon';

export default function AuthModal(): JSX.Element {
  const session = useSession();
  const [authModal, setAuthModal] = useRecoilState(AuthModalState);
  const [passReset, setPassReset] = useState(false);

  const handleClose = () => {
    setAuthModal((prev) => ({
      ...prev,
      open: false,
      view: 'login'
    }));
  };

  useEffect(() => {
    if (authModal.view === 'resetPassword') {
      setPassReset(true);
    } else {
      setPassReset(false);
    }
  }, [authModal]);

  useEffect(() => {
    if (session) {
      setAuthModal({ open: false, view: 'login' });
    }
  }, [session]);

  return (
    <Modal
      open={authModal.open}
      closeModal={handleClose}
      className='dosis max-w-xs md:max-w-md'
    >
      <div className='text-main-black space-y-6 bg-white px-6 py-3 md:px-10 md:py-8'>
        <div className='flex justify-end'>
          <button onClick={() => setAuthModal({ open: false, view: 'login' })}>
            <HeroIcon iconName='XMarkIcon' />
          </button>
        </div>
        <div className='mb-2 py-1 text-center font-bold md:mb-6'>
          <h2 className='text-xl uppercase md:text-3xl'>
            {authModal.view === 'login' && 'Member login'}
            {authModal.view === 'signup' && 'Sign up'}
            {authModal.view === 'resetPassword' && 'Reset password'}
          </h2>
        </div>
        {authModal.view === 'login' && <AuthLogin />}
        {authModal.view === 'signup' && <AuthSignUp />}
        {authModal.view === 'resetPassword' && <AuthResetPassword />}

        {!passReset && (
          <div className='mt-2'>
            <p
              onClick={() =>
                setAuthModal({
                  open: true,
                  view: authModal.view === 'login' ? 'signup' : 'login'
                })
              }
              className='text-main-gray-sec hover:text-main-black cursor-pointer font-semibold transition-all'
            >
              {authModal.view === 'login' && `Don't have an account ?`}
              {authModal.view === 'signup' && 'Already have an account ?'}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
