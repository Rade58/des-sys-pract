import type { Meta, StoryObj } from "@storybook/react-vite";

import { Callout } from "./Callout";

const meta = {
  title: "AfterHourDev/Callout",
  component: Callout,
  args: {
    children: "Lorem Ipsum",
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "information", "success", "danger", "warning"],
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Information: Story = {
  args: { variant: "information", title: "This is info" },
};
export const Primary: Story = {
  args: { variant: "primary", title: "Primary" },
};
export const Success: Story = {
  args: { variant: "success", title: "Success" },
};
export const Warning: Story = {
  args: { variant: "warning", title: "Warning" },
};
export const Danger: Story = {
  args: { variant: "danger", title: "Error" },
};
