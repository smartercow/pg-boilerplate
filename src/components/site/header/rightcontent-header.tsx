import { useSession } from '@supabase/auth-helpers-react';
import HeaderAuth from './auth-header';
import HeaderProfile from './profile-header';

export default function RightContentHeader(): JSX.Element {
  const session = useSession();

  return <>{session ? <HeaderProfile /> : <HeaderAuth />}</>;
}
