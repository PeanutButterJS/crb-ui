import { Controller, Validate } from 'react-hook-form';
import styled from 'styled-components';
import { theme } from '../../theme';
import Input from '../input/input';

const FormControl = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label``;

const Error = styled.div`
  width: 100%;
  margin-top: 4px;
  font-size: 11px;
  color: ${theme.colors.alert};
`;

export interface FieldProps {
  fieldComponent: 'text';
  id: string;
  fieldProps?: {
    [key: string]: any;
  };
  defaultValue?: any;
  form: any;
  label?: string;
  rules?: { [val: string]: Validate<any> };
}

export const Field = ({ fieldComponent, fieldProps, id, form, label, rules }: FieldProps) => {
  debugger;

  const components = {
    text: Input
  };

  const Component = components[fieldComponent];

  debugger;
  const errors = form?.formState?.errors;

  return (
    <FormControl>
      <Label className="control-label" htmlFor={id}>
        {label}
      </Label>
      <Controller
        name={id}
        control={form.control}
        rules={{ validate: rules }}
        render={({ field }) => <Component {...field} id={id} {...fieldProps} />}
      />
      {errors?.[id] && <Error>{errors[id]?.message}</Error>}
    </FormControl>
  );
};

export default Field;
