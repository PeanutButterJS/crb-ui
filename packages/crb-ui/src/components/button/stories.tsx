import { Button } from './button';
import { ButtonProps } from './button.types';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ItemWrapper = styled.div`
  margin: 10px;
`;

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Primary: Story<ButtonProps> = () => (
  <Container>
    <ItemWrapper>
      <Button>Primary</Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button disabled>Disabled</Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button isLoading>Loader</Button>
    </ItemWrapper>
  </Container>
);
