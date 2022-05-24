import { Input as AntInput } from 'antd';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledInput = styled(AntInput)`
  height: 60px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);

  :hover {
    border-color: rgba(0, 0, 0, 0.1);
  }
  :focus {
    border-color: ${theme.colors.lightBlue};
    box-shadow: 0px 0px 0px 2px rgba(3, 160, 239, 0.5);
  }
`;

export interface InputProps {
  placeholder?: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return <StyledInput placeholder={placeholder} />;
};

export default Input;
