import { Loader, LoaderProps } from './loader';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Loader',
  component: Loader
} as Meta;

export const DotLoader: Story<LoaderProps> = () => <Loader />;
