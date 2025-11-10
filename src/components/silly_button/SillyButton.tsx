import React, { type ComponentProps } from "react";

import clsx from "clsx";

import styles from "./Sillybutton.module.css";

export type SillyButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "destructive";
  className?: string;
  size?: "small" | "medium" | "large";
};

export function SillyButton({
  variant = "primary",
  size = "medium",
  className: additionalClassName,
  // disabled,
  ...props
}: SillyButtonProps) {
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
      // this way we are allowing className prop to override styles
      // if user of the component wants to do that

      className={clsx(
        styles.button,
        {
          [styles.primary]: false, // added this jus to show you that
          // in terms of our css file we don't have .primary class
          // .button is our primary button style
          [styles.secondary]: variant === "secondary",
          [styles.destructive]: variant === "destructive",
          //
          // I like this more
          // [styles.medium]: size === "medium",
          // [styles.small]: size === "small",
          // [styles.large]: size === "large",
          // but let's do these like this: styles[size]
        },
        styles[size],
        // this can be used but it is bad idea
        // because sombody could add a class and mess things up
        // allow this maybe mostly on low level like it is here
        // and by low level I think of component
        // built from one elemnt just like this
        // button is
        additionalClassName,
        // we can add more classes here if we want
        // "hover:underline decoration-2 decoration-emerald-800",
      )}
    />
  );
}
