import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "./Button";
const meta: Meta = {
  title: "Radedev/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const primary: Story = {
  args: {
    primary: true,
    children: "Button",

    //
    onClick: fn(),
  },
};
