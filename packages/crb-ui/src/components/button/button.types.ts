import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}
