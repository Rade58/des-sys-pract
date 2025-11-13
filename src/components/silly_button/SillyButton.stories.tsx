import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { SillyButton } from "./SillyButton";

const meta = {
  title: "Radedev/Components/Silly Button",
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
      options: ["primary", "secondary", "destructive"],
    },
    //
    /* size: {
      control: "radio",
    }, */
    // this would be more fine grained approach of doing
    // prop types
    children: {
      name: "lable",
      control: "text",
      description: "Text to be displayed on the button",
      // if you do this it will be disabled from displaying
      // in documentation (blocks we used in mdx files)
      table: {
        disable: true,
      },
    },
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

//

export const Dark: Story = {
  // this is overriding query params
  // and in this case it will be theme
  // dark theme qill be applied for this story
  parameters: {
    themes: {
      // so we are forcing dark mode
      themeOverride: "dark",
    },
  },
};

// here we are overriding  viewport
// but I don't think this reflects any query params
// to force mobile viewport
// see this: https://storybook.js.org/docs/essentials/viewport#defining-the-viewport-for-a-story
export const Mobile: Story = {
  globals: {
    // 👇 Override viewport for this story
    viewport: { value: "mobile1", isRotated: false },
  },
};
