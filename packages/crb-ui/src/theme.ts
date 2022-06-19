import { createGlobalStyle } from 'styled-components';

export type Theme = {
  colors: {
    blue: string;
    lightBlue: string;
    white: string;
    lightGray: string;
    alert: string;
    lightAlert: string;
    text: string;
  };
  fonts: {
    medium: string;
    extraBold: string;
  };
};

export const theme: Theme = {
  colors: {
    blue: '#0071B7',
    lightBlue: '#03A0EF',
    white: 'white',
    lightGray: '#EBF0F2',
    lightAlert: '#FFF7F9',
    alert: '#CC1F4E',
    text: '#1F0040'
  },
  fonts: {
    medium: `normal normal 500 16px "Fira Sans", sans-serif`,
    extraBold: `normal normal 800 16px "Fira Sans", sans-serif`
  }
};

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
  * {
    font-family: 'Fira Sans', sans-serif;
    font-size:10px;
    outline: none;
  }
  
`;
