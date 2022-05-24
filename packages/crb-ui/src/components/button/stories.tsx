import { Button, ButtonProps } from './button';
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
  title: 'Button',
  component: Button
} as Meta;

export const Primary: Story<ButtonProps> = () => (
  <Container>
    <ItemWrapper>
      <Button
        onClick={() => {
          alert('alert');
        }}
      >
        Primary Alert
      </Button>
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

export const Small: Story<ButtonProps> = () => (
  <Container>
    <ItemWrapper>
      <Button small>Small</Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button small secondary>
        Small Secondary
      </Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button disabled small>
        Disabled
      </Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button isLoading small>
        Loader
      </Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button small>
        <Icon url={mdiAccount} color={theme.colors.white} />
      </Button>
    </ItemWrapper>
  </Container>
);
export const Light: Story<ButtonProps> = () => (
  <Container>
    <ItemWrapper>
      <Button light small>
        Light Small
      </Button>
    </ItemWrapper>

    <ItemWrapper>
      <Button disabled light small>
        Disabled
      </Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button isLoading light small>
        Loader
      </Button>
    </ItemWrapper>
    <ItemWrapper>
      <Button small light>
        <Icon url={mdiAccount} color={theme.colors.blue} />
      </Button>
    </ItemWrapper>
  </Container>
);

export const IconButton: Story<ButtonProps> = () => (
  <ColContainer>
    <Container>
      <ItemWrapper>
        <Button icon={<Icon url={mdiAccount} color={theme.colors.white} />} />
      </ItemWrapper>
      <ItemWrapper>
        <Button disabled icon={<Icon url={mdiAccount} color={theme.colors.white} />} />
      </ItemWrapper>
      <ItemWrapper>
        <Button danger icon={<Icon url={mdiAccount} color={theme.colors.alert} />}></Button>
      </ItemWrapper>
    </Container>

    <Container>
      <ItemWrapper>
        <Button icon={<Icon url={mdiAccount} color={theme.colors.white} />} small />
      </ItemWrapper>
      <ItemWrapper>
        <Button disabled icon={<Icon url={mdiAccount} color={theme.colors.white} />} small />
      </ItemWrapper>
      <ItemWrapper>
        <Button danger icon={<Icon url={mdiAccount} color={theme.colors.alert} />} small />
      </ItemWrapper>
      <ItemWrapper>
        <Button small light icon={<Icon url={mdiAccount} color={theme.colors.blue} />} />
      </ItemWrapper>
    </Container>
  </ColContainer>
);
