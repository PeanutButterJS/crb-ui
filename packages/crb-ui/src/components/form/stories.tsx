import { Field, FieldProps, useCrbForm } from './';
import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';

export default {
  title: 'Form',
  component: Field
} as Meta;

export const Form: Story<FieldProps> = () => {
  const form = useCrbForm({
    defaultValues: {
      name: 'aron'
    }
  });
  const submit = (val: any) => {
    debugger;
  };
  debugger;
  return (
    <form onSubmit={form?.handleSubmit(submit)}>
      <Field
        fieldComponent="text"
        id="name"
        form={form}
        label="Name"
        rules={{
          required: (val: string) => !!val || 'Name is required',
          nameIsAron: (val: string) => val === 'aron' || 'Name isnt aron'
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
};
