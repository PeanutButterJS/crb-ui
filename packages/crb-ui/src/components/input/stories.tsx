import { Input } from './input';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { mdiAccount } from '@mdi/js';
import { theme } from '../../theme';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;
const ItemWrapper = styled.div`
  margin: 10px;
`;
const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  title: 'Input',
  component: Input
} as Meta;

export const Primary: Story = () => (
  <Container>
    <ItemWrapper>
      <Input />
    </ItemWrapper>
    <ItemWrapper>
      <Input />
    </ItemWrapper>
  </Container>
);
