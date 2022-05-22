import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme';

export interface SpinnerProps {
  className?: string;
  color?: string;
}

const spin = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<SpinnerProps>`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  :after {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid ${props => props.color || theme.colors.blue};
  transform: translateZ(0);
  animation: ${spin} 1.1s infinite linear;
`;

export default Spinner;
