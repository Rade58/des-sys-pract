import React, { type ComponentProps } from "react";

import clsx from "clsx";

import styles from "./Sillybutton.module.css";

export type SillyButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "destructive";
};

export function SillyButton(props: SillyButtonProps) {
  let className: string = styles.button;

  switch (props.variant) {
    case "primary":
      break;
    case "secondary":
      className = className += ` ${styles.secondary}`;
      break;
    case "destructive":
      className = className += ` ${styles.destructive}`;
      break;
    default:
      break;
  }

  return <button className={className} {...props} />;
}
