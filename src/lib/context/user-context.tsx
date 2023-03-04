import { useState, useEffect, useContext, createContext, useMemo } from 'react';
import { useUser } from '@supabase/auth-helpers-react';
import type { ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { useRouter } from 'next/router';

type AuthContext = {
  user: User | null;
  isAdmin: boolean;
  isDashboard: boolean;
};

export const AuthContext = createContext<AuthContext | null>(null);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({
  children
}: AuthContextProviderProps): JSX.Element {
  const user = useUser();
  const router = useRouter();

  const isAdmin = user ? user.email === 'jamey@gmail.com' : false;
  const isDashboard = router.pathname === '/account';

  const value: AuthContext = {
    user,
    isAdmin,
    isDashboard
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useUserContext(): AuthContext {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('useAuth must be used within an AuthContextProvider');

  return context;
}
