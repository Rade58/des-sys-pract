import React, { type ComponentProps } from "react";

import clsx from "clsx";

import styles from "./Sillybutton.module.css";

export type SillyButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "destructive";
};

export function SillyButton({ variant, ...props }: SillyButtonProps) {
  // without clsx library
  /*
  
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
  */
  //  with libray

  return (
    <button
      {...props}
      /* className={clsx(
        styles.button,

        variant === "secondary" && styles.secondary,
        variant === "destructive" && styles.destructive,
        variant === "primary" && false, // I added this but it is unnecessary
      )} */

      // we can do it like this because
      // we want actual string of the our scoped css class
      // or we want undefined in order to not apply class
      // so styles[variant] can give a string or undefined
      // only thing is that I hate this, and also
      // typscript hates this
      // className={clsx(styles.button, styles[variant])}

      // favorite way

      className={clsx(styles.button, {
        [styles.primary]: false, // added this jus to show you that
        // in terms of our css file we don't have .primary class
        // .button is our primary button style
        [styles.secondary]: variant === "secondary",
        [styles.destructive]: variant === "destructive",
      })}
    />
  );
}
