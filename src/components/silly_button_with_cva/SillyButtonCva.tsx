import React, { type ComponentProps } from "react";

import { cn } from "../../util/cn";

// here we will refactor our SillyButton
// (src/components/silly_button/SillyButton.tsx)
// to use cva

import {
  variants as sillyButtonVariants,
  // so this was easier to use
  // but only in Storybook it doesn't work
  // type SillyButtonVariants,
  // I made these types because they work for storybook
  // since storybook generates controls based on prop types
  // ***** didn't work for storybook (not using it)
  // type ButtonVariant,
  // type ButtonSize,
} from "./variants";

//
export type SillyButtonProps =
  ComponentProps<"button"> & /* SillyButtonVariants &  */ { // but // ERROR: just Storybook // // this is very helpful normaly
    // Same error here
    // I got error with this which meaans this Exclude isn't
    // supported in terms of Storybook also
    // I can use it but I wont
    // also it is not descriptive enough
    // variant?: Exclude<SillyButtonVariants["variant"], null | undefined>;
    // variant?: "primary" | "secondary" | "destructive";
    //
    // again this didn't work Ias I expected
    // size?: Exclude<SillyButtonVariants["size"], null | undefined>;
    // so we hardcode this type

    // I don't want to write types like this
    variant?: "primary" | "secondary" | "destructive";
    size?: "small" | "medium" | "large";
    className?: string;

    // ***** didn't work for storybook
    // variant?: ButtonVariant;
    // size?: ButtonSize;
  };

export function SillyButtonCva({
  variant = "secondary",
  size = "medium",
  className: externalClassName,
  children,
  ...props
}: SillyButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        sillyButtonVariants({
          variant,
          size,
        }),
        externalClassName,
      )}
    >
      {children}
    </button>
  );
}
