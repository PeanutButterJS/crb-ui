import { Button } from './button';
import { ButtonProps } from './button';
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
    <ItemWrapper>
      <Button>
        <Icon url={mdiAccount} color={theme.colors.white} />
      </Button>
    </ItemWrapper>
  </Container>
);

export const Secondary: Story<ButtonProps> = () => (
  <Container>
    <ItemWrapper>
      <Button secondary>Secondary</Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button disabled secondary>
        Disabled
      </Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button isLoading secondary>
        Loader
      </Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button secondary>
        <Icon url={mdiAccount} color={theme.colors.blue} />
      </Button>
    </ItemWrapper>
  </Container>
);

export const Danger: Story<ButtonProps> = () => (
  <Container>
    <ItemWrapper>
      <Button danger>Danger</Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button disabled danger>
        Disabled
      </Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button isLoading danger>
        Loader
      </Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button danger>
        <Icon url={mdiAccount} color={theme.colors.alert} />
      </Button>
    </ItemWrapper>
  </Container>
);
