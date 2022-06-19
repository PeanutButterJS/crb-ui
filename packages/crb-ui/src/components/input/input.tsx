import { Input as AntInput } from 'antd';
import { useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledInput = styled(AntInput)`
  height: 60px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;

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
  value?: string;
  id: string;
  onChange?: (val: any) => void;
}

export const Input = ({ placeholder, value, onChange, id }: InputProps) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
  return <StyledInput placeholder={placeholder} value={value || ''} onChange={onChange} />;
};

export default Input;
