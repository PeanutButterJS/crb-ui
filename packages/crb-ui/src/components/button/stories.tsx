import { Button, ButtonProps } from './button';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

export default {
  title: 'Button',
  component: Button
} as Meta;

const StyledButton = styled(Button)`
  background-color: blue;
`;

export const Default: Story<ButtonProps> = () => <Button>test button</Button>;
export const BlueButton: Story<ButtonProps> = () => <StyledButton>test button</StyledButton>;
