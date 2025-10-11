import type { Meta, StoryFn } from "@storybook/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import ChakraButton from "./ChakraButton";

export default {
  title: "Chakra/ChakraButton",
  component: ChakraButton,
} as Meta<typeof ChakraButton>;

const Template: StoryFn<typeof ChakraButton> = () => (
  <ChakraProvider value={defaultSystem}>
    <ChakraButton />
  </ChakraProvider>
);

export const Default = Template.bind({});
