export type Theme = {
  colors: {
    blue: string;
    white: string;
    lightGray: string;
    alert: string;
    lightAlert: string;
  };
  fonts: {
    medium: string;
    extraBold: string;
  };
};

export const theme: Theme = {
  colors: {
    blue: '#0071B7',
    white: 'white',
    lightGray: '#EBF0F2',
    lightAlert: '#FFF7F9',
    alert: '#CC1F4E'
  },
  fonts: {
    medium: `normal normal 500 16px "Fira Sans", sans-serif`,
    extraBold: `normal normal 800 16px "Fira Sans", sans-serif`
  }
};
