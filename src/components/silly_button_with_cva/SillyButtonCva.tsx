import React, { type ComponentProps } from "react";

import { cn } from "../../util/cn";

// here we will refactor our SillyButton
// (src/components/silly_button/SillyButton.tsx)
// to use cva

import {
  variants as sillyButtonVariants,
  // type SillyButtonVariants,
} from "./variants";

export type SillyButtonProps = ComponentProps<"button"> & {
  // variant?: "primary" | "secondary" | "destructive";
  // I got error with this which meaans this Exclude isn't
  // supported in ComponentProps in terms of Storybook
  // I can use it but I wont
  // also it is not descriptive enough
  // variant?: Exclude<SillyButtonVariants["variant"], null | undefined>;
  variant?: "primary" | "secondary" | "destructive";
  //
  className?: string;
  // again this didn't work Ias I expected
  // size?: Exclude<SillyButtonVariants["size"], null | undefined>;
  // so we hardcode this type
  size?: "small" | "medium" | "large";
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
