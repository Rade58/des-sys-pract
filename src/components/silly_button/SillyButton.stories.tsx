import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { SillyButton } from "./SillyButton";

const meta: Meta = {
  title: "Radedev/Silly Button",
  component: SillyButton,
  //
  args: {
    onClick: fn(),
    //
    children: "Press",
    //
    disabled: false,
    //
    size: "medium",
    variant: "primary",
  },
  //
  argTypes: {
    disabled: {
      control: "boolean",
    },
    // before usinng this variant was radio
    // now it will be dropdown
    variant: {
      control: "select",
    },
    //
    /* size: {
      control: "radio",
    }, */
  },
} satisfies Meta<typeof SillyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Primary: Story = {
  args: {
    // children: "Button",

    //
    // tw: "bg-purple-600 text-amber-100 hover:bg-purple-500",
    variant: "primary",
    //
  },
  // we will use args mostly, this should be used only as escape hatch
  // render: () => <SillyButton tw="bg-purple-600 text-amber-100">Hello</SillyButton>,

  //
};

export const Secondary: Story = {
  args: {
    // children: "Secondary",
    // tw: "bg-teal-600 hover:bg-teal-400",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
