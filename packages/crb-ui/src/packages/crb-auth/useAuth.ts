import { useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuth] = useState(() => {
    const item = window?.localStorage?.getItem('crbIsAuthenticated');
    // Parse stored json or if none return initialValue
    return item ? JSON.parse(item) : false;
  });

  const setisAuthenticated = (value: boolean) => {
    try {
      setIsAuth(value);

      window?.localStorage?.setItem('crbIsAuthenticated', JSON.stringify(value));
    } catch (error) {
      setIsAuth(false);
    }
  };

  return { isAuthenticated, setisAuthenticated };
};
