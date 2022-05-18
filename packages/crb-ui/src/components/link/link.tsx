import { ReactNode } from 'react';
import styled from 'styled-components';

export type LinkProps = {
  children: ReactNode;
  className?: string;
};

const StyledButton = styled.button`
  background-color: palegreen;
  height: 40px;
`;

export const Link = ({ children, className }: LinkProps) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};

export default Link;
