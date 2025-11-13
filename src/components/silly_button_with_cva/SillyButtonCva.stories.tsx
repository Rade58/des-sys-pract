import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { SillyButtonCva } from "./SillyButtonCva";

const meta = {
  title: "Radedev/Components/Button With CVA (class variant authority)",
  component: SillyButtonCva,

  args: {
    onClick: fn(),
    children: "Click",
    disabled: false,
    size: "small",
    variant: "primary",
  },
  //
  argTypes: {
    disabled: {
      control: "boolean",
    },
    //
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive"],
    },
    size: {
      control: "radio",
      options: ["medium", "small", "large"],
    },
  },
} satisfies Meta<typeof SillyButtonCva>;

export default meta;

type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
