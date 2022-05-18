import { ReactNode } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const StyledButton = styled.button`
  background-color: palegreen;
  height: 40px;
`;

export const Button = ({ children, className }: ButtonProps) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};

export default Button;
