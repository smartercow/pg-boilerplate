import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { AuthModalState } from '@lib/state/auth-state';
import { Input } from '@components/ui/core/input';
import { authLoginInputs } from '@lib/data/local/auth-inputs';
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import cn from 'clsx';

const initialTextInputs = {
  email: '',
  password: ''
};

type AuthLoginProps = {
  handleRef?: () => void;
  checkoutLogin?: boolean;
  setCheckoutLogin?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AuthLogin({
  handleRef,
  checkoutLogin,
  setCheckoutLogin
}: AuthLoginProps): JSX.Element {
  const supabase = useSupabaseClient();

  const router = useRouter();
  const [loginForm, setLoginForm] = useState(initialTextInputs);
  const { email, password } = loginForm;
  const [error, setError] = useState('');

  const setAuthModalState = useSetRecoilState(AuthModalState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));

    if (error) setError('');
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError('');

    if (email && password) {
      try {
        const res = await supabase.auth.signInWithPassword({
          email: email,
          password: password
        });
        if (res.error) throw res.error;

        setAuthModalState({ open: false, view: 'login' });
        router.refresh();
      } catch (error) {
        setError('ERROR while logging in!');
      }
    } else {
      setError('Please fill all fields');
      if (handleRef) handleRef();
      if (setCheckoutLogin) setCheckoutLogin(false);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className='text-main-black flex flex-col gap-5'>
        {authLoginInputs.map((input) => (
          <Input
            key={input.name}
            {...input}
            handleChange={handleChange}
            noColon
          />
        ))}

        <div className='flex w-full justify-between gap-1 font-semibold'>
          <span className='flex items-center gap-1'>
            <input
              type='checkbox'
              name='remember'
              value='Remember me'
              className='checkbox'
            />
            <label htmlFor='remember' className='form-label'>
              Remember me
            </label>
          </span>
          <span>
            <p
              onClick={() =>
                setAuthModalState({ open: true, view: 'resetPassword' })
              }
              className='form-label cursor-pointer'
            >
              Forgot password?
            </p>
          </span>
        </div>

        <div className={cn(checkoutLogin && 'w-full text-center')}>
          <button
            type='submit'
            className={cn(
              'btn-error btn',
              checkoutLogin ? 'w-40 text-center text-lg' : 'w-full'
            )}
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}
