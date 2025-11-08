import React, { type ComponentProps } from "react";

import clsx from "clsx";

import styles from "./Sillybutton.module.css";

export type SillyButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "destructive";
};

export function SillyButton({ variant, ...props }: SillyButtonProps) {
  let className: string = styles.button;

  switch (variant) {
    case "primary":
      break;
    case "secondary":
      className += ` ${styles.secondary}`;
      break;
    case "destructive":
      className += ` ${styles.destructive}`;
      break;
    default:
      break;
  }

  return <button className={className} {...props} />;
}
