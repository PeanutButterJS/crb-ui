import MDIIcon from '@mdi/react';
import { theme } from '../../theme';

export interface IconProps {
  color?: string;
  url: string;
  size?: number;
  className?: string;
}

export const Icon = ({ color, url, size = 1, className }: IconProps) => {
  return (
    <MDIIcon className={className} path={url} size={size} color={color || theme.colors.blue} />
  );
};

export default Icon;
