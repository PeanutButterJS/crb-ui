import { ReactNode } from 'react';
import 'antd/dist/antd.css';
import 'normalize.css';
import { GlobalStyle } from '../../theme';

interface CrbUiProviderProps {
  children: ReactNode;
}

export const CrbUiProvider = ({ children }: CrbUiProviderProps) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default CrbUiProvider;
