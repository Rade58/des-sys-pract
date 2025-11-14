import type { PropsWithChildren /*, ComponentProps */ } from "react";

import { calloutVariants, type CalloutVariants } from "./callout-variant";
import clsx from "clsx";

// Why aren't we using ComponentProps<"div">
// we don't want to allow anyone who uses this component
// to pass all props div can take

export type CalloutProps = PropsWithChildren<
  CalloutVariants & {
    title: string;
  }
>; /*  & {
  className?: string;
}; */

export function Callout({
  // className: additionalClasses,
  children,
  variant,
  title,
}: CalloutProps) {
  return (
    <div
      className={calloutVariants({
        variant,
      })}
    >
      <h2 className="font-semibold text-2xl">{title}</h2>
      {/* in real worls example here you would pass more than text,
      so markup shuld be here */}
      <p>{children}</p>
    </div>
  );
}
