import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export interface UseCrbFormParams {
  defaultValues: any;
}

export const useCrbForm = ({ defaultValues }: UseCrbFormParams) => {
  const form = useForm({
    defaultValues
  });

  return form;
};
