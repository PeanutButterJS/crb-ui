import { Loader, LoaderProps } from './loader';
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
  title: 'Loader',
  component: Loader
} as Meta;

export const Primary: Story<LoaderProps> = () => <Loader />;
