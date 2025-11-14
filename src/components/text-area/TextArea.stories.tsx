import type { Meta, StoryObj } from "@storybook/react-vite";

import { userEvent, within, expect } from "storybook/test";

import { TextArea } from "./TextArea";

const meta = {
  title: "Explore Testing/TextArea",
  component: TextArea,
  args: {
    label: "TextAreaLabel",
    placeholder: "Enter some text here...",
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "Label of the text area",
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Placeholder text of the text area",
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Disables the text area",
      table: {
        defaultValue: {
          // summary: false,
        },
      },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Marks the text area as required",
      table: {
        defaultValue: {
          // summary: false,
        },
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "This is default textarea",
  },
};

export const With_Count: Story = {
  args: {
    label: "This is textarea with count",
    maxLength: 140,
  },
  play: async ({ canvasElement /* canvas */ }) => {
    const canvas = within(canvasElement);

    const textArea = canvas.getByRole("textbox");
    const count = canvas.getByTestId("length");

    const inputValue = "Hello, World!";

    // don't forget to await, because your test will fail
    await userEvent.type(textArea, inputValue);

    expect(textArea).toHaveValue(inputValue);
    expect(count).toHaveTextContent(inputValue.length.toString());
  },
};

export const LengthTooLong: Story = {
  args: {
    label: "This is texterea with count too long",
    maxLength: 140,
    value: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const textArea = canvas.getByRole("textbox");
    const count = canvas.getByTestId("length");

    const inputValue = "H" + "e".repeat(140) + "y!";
    await userEvent.type(textArea, inputValue);

    expect(textArea).toHaveValue(inputValue);

    expect(count).toHaveTextContent(inputValue.length.toString());

    expect(textArea).toHaveAttribute("aria-invalid", "true");

    expect(textArea).toHaveClass("ring-danger-500");

    expect(count).toHaveStyle({ color: "#ed4656" /* "rgb(237, 70, 86)" */ });
  },
};

export const Disabled: Story = {
  args: {
    label: "This is disabled textarea",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole("textbox");

    expect(textArea).toBeDisabled();

    const inputValue = "H" + "e".repeat(140) + "y!";

    await userEvent.type(textArea, inputValue);

    expect(textArea).toHaveValue("");
  },
};
