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
  type ButtonVariant,
  type ButtonSize,
} from "./variants";

//
export type SillyButtonProps =
  ComponentProps<"button"> & // // this is very helpful normaly
  // but // ERROR: just Storybook
  /* SillyButtonVariants &  */ {
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
    // variant?: "primary" | "secondary" | "destructive";
    // size?: "small" | "medium" | "large";
    className?: string;

    // but at the end I defined types not with Exclude but with
    // NonNulable typescript utility
    // and it worked
    variant?: ButtonVariant;
    size?: ButtonSize;
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
