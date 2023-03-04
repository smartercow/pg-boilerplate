import { Button } from '@components/ui/core/button';
import { HeroIcon } from '@components/ui/icons/hero-icon';
import { AuthModalState } from '@lib/state/auth-state';
import { useSetRecoilState } from 'recoil';

export default function HeaderAuth(): JSX.Element {
  const setAuthModal = useSetRecoilState(AuthModalState);

  return (
    <>
      <div className='inline-flex rotate-180 select-none md:hidden'>
        <Button onClick={() => setAuthModal({ open: true, view: 'login' })}>
          <HeroIcon
            iconName='ArrowLeftOnRectangleIcon'
            className='h-7 w-7 sm:h-7 sm:w-7'
          />
        </Button>
      </div>
      <div className='hidden whitespace-nowrap pt-2 md:inline-flex'>
        <div className='flex gap-4'>
          <Button
            onClick={() => setAuthModal({ open: true, view: 'login' })}
            className=''
          >
            Sign In
          </Button>
          <Button
            onClick={() => setAuthModal({ open: true, view: 'signup' })}
            className=''
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}
