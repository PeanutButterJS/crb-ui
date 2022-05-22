import { Loader as DotLoader, LoaderProps } from './loader';
import { Spinner as LoadingSpinner, SpinnerProps } from './spinner';
import { theme } from '../../theme';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const ItemWrapper = styled.div`
  margin: 10px;
`;

export default {
  title: 'Loaders',
  component: DotLoader
} as Meta;

export const Loader: Story<LoaderProps> = () => (
  <Container>
    <ItemWrapper>
      <DotLoader />
    </ItemWrapper>
    <ItemWrapper>
      <DotLoader color={theme.colors.alert} />
    </ItemWrapper>
  </Container>
);

export const Spinner: Story<SpinnerProps> = () => (
  <Container>
    <ItemWrapper>
      <LoadingSpinner />
    </ItemWrapper>
    <ItemWrapper>
      <LoadingSpinner color={theme.colors.alert} />
    </ItemWrapper>
  </Container>
);
