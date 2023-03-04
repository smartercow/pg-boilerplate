import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { AuthModalState } from '@lib/state/auth-state';
import { Input } from '@components/ui/core/input';
import { Button } from '@components/ui/core/button';
import { EmailFormat } from '@utils/format';

export default function AuthResetPassword(): JSX.Element {
  const supabase = useSupabaseClient();
  const setAuthModal = useSetRecoilState(AuthModalState);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    if (EmailFormat.test(email)) return setError('Invalid email');
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) setError(error.message);
    else setMessage('Check your email for the password reset link');
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handlePasswordReset} className='flex flex-col gap-2'>
        <div>
          <p className='font-medium'>
            Tell us the email address associated with your Sexuzy account, and
            we’ll send you an email to reset your password.
          </p>
        </div>
        <div></div>
        <div className='space-y-4'>
          <Input
            handleChange={(e: any) => setEmail(e.target.value)}
            labelClassName='text-[14px] font-bold'
            className='border-main-gray h-10 font-semibold'
            name={'reset-password'}
            label={'Email'}
            type={'email'}
            placeholder={'Enter your email'}
          />

          <Button type='submit' disabled={loading} className='auth-button'>
            Email me
          </Button>
          <div className='mt-2'>
            {message && (
              <p className='font-semibold text-secondary'>{message}</p>
            )}
            {error && <p className='font-semibold text-primary'>{error}</p>}
          </div>
        </div>
        <span className='py-2'>
          <p
            onClick={() => setAuthModal({ open: true, view: 'login' })}
            className='text-main-black hover:text-main-gray-sec cursor-pointer font-semibold transition-all'
          >
            Sign In
          </p>
        </span>
      </form>
    </>
  );
}
