import { ReactNode, useState } from 'react';
import { AuthProvider, AuthService, useAuth } from 'react-oauth2-pkce';

export interface AuthParams {
  clientId: string;
  location: Location;
  provider: string;
  redirectUri?: string;
  scopes: string[];
}
export interface CrbAuthProps {
  children: ReactNode;
  authParams: AuthParams;
}

export const CrbAuth = ({ children, authParams }: CrbAuthProps) => {
  const authService = new AuthService({
    clientId: authParams?.clientId,
    location: authParams?.location,
    provider: authParams?.provider,
    redirectUri: authParams?.redirectUri || window.location.origin,
    scopes: authParams?.scopes
  });

  return <AuthProvider authService={authService}>{children}</AuthProvider>;
};

export const useCrbAuth = useAuth;
// export const useAuth = () => {
//   const [isAuthenticated, setIsAuth] = useState(() => {
//     const item = window?.localStorage?.getItem('crbIsAuthenticated');
//     // Parse stored json or if none return initialValue
//     return item ? JSON.parse(item) : false;
//   });

//   const setisAuthenticated = (value: boolean) => {
//     try {
//       setIsAuth(value);

//       window?.localStorage?.setItem('crbIsAuthenticated', JSON.stringify(value));
//     } catch (error) {
//       setIsAuth(false);
//     }
//   };

//   return { isAuthenticated, setisAuthenticated };
// };
