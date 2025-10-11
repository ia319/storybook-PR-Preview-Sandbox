import type { Meta, StoryFn } from "@storybook/react";
import RACInput from "./RACInput";

export default {
  title: "RAC/RACInput",
  component: RACInput,
} as Meta<typeof RACInput>;

const Template: StoryFn<typeof RACInput> = () => <RACInput />;

export const Default = Template.bind({});
