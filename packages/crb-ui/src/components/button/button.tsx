import styled, { css } from 'styled-components';
import { Loader } from '../loaders/loader';
import { theme } from '../../theme';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  secondary?: boolean;
  danger?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${theme.colors.blue};
  height: 60px;
  border-radius: 10px;
  border: none;
  padding: 0 30px;
  color: ${theme.colors.white};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 20%);
  }
  :active {
    opacity: 0.85;
    box-shadow: 0px 4px 10px rgb(0 0 0 / 20%);
  }
  :disabled {
    opacity: 0.3;
    box-shadow: none;
    cursor: default;
  }

  ${props => {
    if (props.secondary) {
      return css`
        background-color: ${theme.colors.lightGray};
        color: ${theme.colors.blue};
      `;
    }

    if (props.danger) {
      return css`
        background-color: ${theme.colors.lightAlert};
        color: ${theme.colors.alert};
      `;
    }
  }}

  ${props => {
    if (props.isLoading) {
      return css`
        padding: 0 50px;
        cursor: default;
        box-shadow: none;
        :hover {
          opacity: 1;
          box-shadow: none;
        }
      `;
    }
  }}
`;

export const Button = ({
  children,
  className,
  disabled,
  isLoading,
  secondary,
  danger
}: ButtonProps) => {
  const getLoaderColor = () => {
    if (secondary) {
      return theme.colors.blue;
    }
    if (danger) {
      return theme.colors.alert;
    }
    return theme.colors.white;
  };
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      isLoading={isLoading}
      secondary={secondary}
      danger={danger}
    >
      {isLoading && <Loader color={getLoaderColor()} />}
      {!isLoading && children}
    </StyledButton>
  );
};

export default Button;
