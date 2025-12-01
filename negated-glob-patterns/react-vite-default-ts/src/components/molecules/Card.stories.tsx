import type { Meta, StoryObj } from '@storybook/react';

const Card = () => <div>Molecule Card</div>;

const meta = {
  title: 'Components/Molecules/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
