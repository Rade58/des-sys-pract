import React, { type ComponentProps } from "react";

import { cn } from "../../util/cn";

// here we will refactor our SillyButton
// (src/components/silly_button/SillyButton.tsx)
// to use cva

import {
  variants as sillyButtonVariants,
  type SillyButtonVariants,
} from "./variants";

// Important thing is that we are not using
// Typscript generation fo controls in storybook
// we typed them through argTypes (we provided options)
export type SillyButtonProps = ComponentProps<"button"> &
  SillyButtonVariants & {
    // I don't want to write types like this
    // we already defined this through cva
    // variant?: "primary" | "secondary" | "destructive";
    // size?: "small" | "medium" | "large";

    className?: string;
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
