import { cva, type VariantProps } from "class-variance-authority";

export const variants = cva(
  [
    "inline-flex",
    "items-center",
    "border-transparent",
    "rounded",
    "border",
    "shadow-xs",
    "cursor-pointer",
    "font-semibold",
    "gap-1.5",
    // "px-1.5",
    // "py-3",
    "transition-colors",
    "duration-200",
    //
    "focus:outline-2",
    "focus:outline-offset-2",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      // we have prop variant in our component
      // so maybe in real world project,
      // consider renaming this prop in your component
      // you don't have to but it is anoying for me to have
      // variants -> variant
      variant: {
        primary: [
          "bg-primary-600",

          "hover:bg-primary-500",
          "active:bg-primary-400",
          "text-white",
          "border-transparent",
        ],
        secondary: [
          "bg-white",
          "text-slate-900",
          "border-slate-300",
          "hover:bg-slate-50",
          "active:bg-slate-100",
        ],
        destructive: [
          "bg-danger-600",
          "text-white",
          "border-transparent",
          "hover:bg-danger-500",
          "active:bg-danger-400",
        ],
      },
      size: {
        small: ["text-sm", "px-1", "py-2"],
        medium: ["text-sm", "px-1.5", "py-2.5"],
        large: ["text-sm", "px-2", "py-3"],
      },
    },
    defaultVariants: {
      // same anoying thing here
      // so we can regret for naming it variant, better name for the prop
      // would be something like `kind` or `flavour`
      // don't use `type` because it is valid html attribute
      // in terms of button or input element for example
      variant: "secondary",
    },
  },
);

export type SillyButtonVariants = VariantProps<typeof variants>;

// There is a problem because Storybook generates their
// controls by reading types of the props and error happens
// if I use type above or if I try to Exclude<> null, because
// null was problematic

export type ButtonVariant = NonNullable<SillyButtonVariants["variant"]>;
export type ButtonSize = NonNullable<SillyButtonVariants["size"]>;
