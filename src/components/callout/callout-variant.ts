import { cva, type VariantProps } from "class-variance-authority";

// this was solution of author of the workshop
// but I hate it because I don't have tailwind intellisense
// this way
/* const variant = {
  primary: [
    "bg-primary-200",
    "border-primary-500",
    "text-primary-900",
    "dark:bg-primary-800",
    "dark:text-primary-50",
    "dark:border-primary-900",
  ],
  information: [
    "bg-information-200",
    "border-information-500",
    "text-information-900",
    "dark:bg-information-800",
    "dark:text-information-50",
    "dark:border-information-900",
  ],
  success: [
    "bg-succes-200",
    "border-succes-500",
    "text-success-900",
    "dark:bg-success-800",
    "dark:text-success-50",
    "dark:border-success-900",
  ],
  warning: [
    "bg-warning-200",
    "border-warning-500",
    "text-warning-900",
    "dark:bg-warning-800",
    "dark:text-warning-50",
    "dark:border-warning-900",
  ],
  danger: [
    "bg-danger-200",
    "border-danger-500",
    "text-danger-900",
    "dark:bg-danger-800",
    "dark:text-danger-50",
    "dark:border-danger-900",
  ],
};

// this is intended to be use to define array of possible values
// for control of arg types

export const calloutVariantOptions = Object.keys(variant); */

// -----------------------------------------------------------

// Typescript is yelling on this one
// so I won't be using enums
/* export enum variantKeys {
  primary = "primary",
  information = "information",
  success = "success",
  warning = "warning",
  danger = "danger",
} */

// I'm using this object instead of enum
const variantKeysEnum = {
  primary: "primary",
  information: "information",
  success: "success",
  warning: "warning",
  danger: "danger",
} as const;

// I'm using this array of keys for controls in storybook
export const calloutVariantOptions = Object.values(variantKeysEnum);

export const calloutVariants = cva(
  ["p-4", "rounded-lg", "border", "shadow-md", "space-y-4"],
  {
    variants: {
      variant: {
        [variantKeysEnum.primary]: [
          "bg-primary-200",
          "border-primary-500",
          "text-primary-900",
          "dark:bg-primary-800",
          "dark:text-primary-50",
          "dark:border-primary-900",
        ],
        [variantKeysEnum.information]: [
          "bg-information-200",
          "border-information-500",
          "text-information-900",
          "dark:bg-information-800",
          "dark:text-information-50",
          "dark:border-information-900",
        ],
        [variantKeysEnum.success]: [
          "bg-succes-200",
          "border-succes-500",
          "text-success-900",
          "dark:bg-success-800",
          "dark:text-success-50",
          "dark:border-success-900",
        ],
        [variantKeysEnum.warning]: [
          "bg-warning-200",
          "border-warning-500",
          "text-warning-900",
          "dark:bg-warning-800",
          "dark:text-warning-50",
          "dark:border-warning-900",
        ],
        [variantKeysEnum.danger]: [
          "bg-danger-200",
          "border-danger-500",
          "text-danger-900",
          "dark:bg-danger-800",
          "dark:text-danger-50",
          "dark:border-danger-900",
        ],
      },
    },
    defaultVariants: {
      variant: variantKeysEnum.primary,
    },
  },
);

export type CalloutVariants = VariantProps<typeof calloutVariants>;
