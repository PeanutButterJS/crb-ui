import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme';

export interface LoaderProps {
  className?: string;
  color?: string;
}

const dotPulseBefore = (color?: string) => keyframes`
0% {
    box-shadow: 9984px 0 0 -5px ${color || theme.colors.blue};
  }
  30% {
    box-shadow: 9984px 0 0 2px ${color || theme.colors.blue};
  }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px ${color || theme.colors.blue};
  }
`;

const dotPulse = (color?: string) => keyframes`
  0% {
    box-shadow: 9999px 0 0 -5px ${color || theme.colors.blue};
  }
  30% {
    box-shadow: 9999px 0 0 2px ${color || theme.colors.blue};
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px ${color || theme.colors.blue};
  
}`;

const dotPulseAfter = (color?: string) => keyframes`
 0% {
    box-shadow: 10014px 0 0 -5px ${color || theme.colors.blue};
  }
  30% {
    box-shadow: 10014px 0 0 2px ${color || theme.colors.blue};
  }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px ${color || theme.colors.blue};
  }
`;

export const Loader = styled.div<LoaderProps>`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.blue};
  box-shadow: 9999px 0 0 -5px ${theme.colors.blue};
  animation: ${props => dotPulse(props.color)} 1.5s infinite linear;
  animation-delay: 0.25s;

  :before,
  :after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.color || theme.colors.blue};
    color: ${props => props.color || theme.colors.blue};
  }

  :before {
    box-shadow: 9984px 0 0 -5px ${props => props.color || theme.colors.blue};
    animation: ${props => dotPulseBefore(props.color)} 1.5s infinite linear;
    animation-delay: 0s;
  }

  :after {
    box-shadow: 10014px 0 0 -5px ${props => props.color || theme.colors.blue};
    animation: ${props => dotPulseAfter(props.color)} 1.5s infinite linear;
    animation-delay: 0.5s;
  }
`;

export default Loader;
