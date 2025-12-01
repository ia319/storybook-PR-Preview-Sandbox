import type { Meta, StoryObj } from '@storybook/react';

const Sibling = () => <div>Sibling Component</div>;

const meta = {
  title: 'Sibling/Component',
  component: Sibling,
} satisfies Meta<typeof Sibling>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
