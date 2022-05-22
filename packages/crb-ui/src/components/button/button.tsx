import styled, { css } from 'styled-components';
import { Loader } from '../loaders/loader';
import { theme } from '../../theme';
import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  secondary?: boolean;
  danger?: boolean;
  small?: boolean;
  light?: boolean;
  icon?: ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  background-color: ${theme.colors.blue};
  box-sizing: border-box;
  font: ${theme.fonts.medium};
  height: 60px;
  border-radius: 10px;
  padding: 0 30px;
  color: ${theme.colors.white};
  font-size: 18px;
  display: flex;
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
  :focus {
    box-shadow: 0px 0px 0px 2px rgba(3, 160, 239, 0.5);
  }

  ${props => {
    if (props.light) {
      return css`
        background-color: transparent;
        color: ${theme.colors.text};
        border: 1px solid rgba(0, 0, 0, 0.1);
        :focus {
          box-shadow: 0px 0px 0px 2px rgba(3, 160, 239, 0.5);
        }
      `;
    }
    if (props.secondary) {
      return css`
        background-color: ${theme.colors.lightGray};
        color: ${theme.colors.blue};
        :focus {
          box-shadow: 0px 0px 0px 2px rgba(3, 160, 239, 0.5);
        }
      `;
    }

    if (props.danger) {
      return css`
        background-color: ${theme.colors.lightAlert};
        color: ${theme.colors.alert};
        :focus {
          box-shadow: 0px 0px 0px 2px rgba(204, 31, 78, 0.5);
        }
      `;
    }
  }}

  ${props => {
    if (props.small) {
      return css`
        height: 40px;
        padding: 0 20px;
        font-size: 16px;
      `;
    }
  }}

  ${props => {
    if (props.isLoading) {
      return css`
        padding: 0 35px;
        cursor: default;
        box-shadow: none;
        :hover {
          opacity: 1;
          box-shadow: none;
        }
      `;
    }
  }}

  ${props => {
    if (props.icon) {
      return css`
        width: ${props.small ? '40px' : '60px'};
        padding: 0;
        border-radius: ${props.small ? '10px' : '27px'};
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
  danger,
  small,
  light,
  icon
}: ButtonProps) => {
  const getLoaderColor = () => {
    if (secondary || light) {
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
      small={small}
      light={light}
      icon={!!icon}
    >
      {isLoading && <Loader color={getLoaderColor()} small={small} />}
      {!isLoading && icon}
      {!isLoading && !icon && children}
    </StyledButton>
  );
};

export default Button;
