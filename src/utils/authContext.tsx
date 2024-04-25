import React from 'react';
import { useStorageState } from '../hooks/useStorageState';

interface propsSessionProvider{
  children: React.ReactNode
  AUTHENTICATION_KEY?: string | null
}

const AuthContext = React.createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

const AUTHENTICATION_KEY = process.env.EXPO_PRIVATE_API_CLIENT_KEY;

export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({children}: propsSessionProvider) {
  const [[isLoading, session], setSession] = useStorageState('session');
  console.log(session);
  
  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          setSession('');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
        
      {children}
    </AuthContext.Provider>
  );
}
