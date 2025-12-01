import type { Meta, StoryObj } from '@storybook/react';

const Button = () => <button>Atom Button</button>;

const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
