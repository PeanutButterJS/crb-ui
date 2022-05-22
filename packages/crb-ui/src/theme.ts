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
