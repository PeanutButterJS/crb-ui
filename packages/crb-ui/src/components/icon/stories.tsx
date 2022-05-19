import { Icon, IconProps } from './icon';
import { Story, Meta } from '@storybook/react';
import { mdiAccount } from '@mdi/js';

export default {
  title: 'Icon',
  component: Icon
} as Meta;

export const Icons: Story<IconProps> = () => <Icon url={mdiAccount} />;
