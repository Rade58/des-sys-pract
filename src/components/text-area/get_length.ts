import { type ComponentProps } from "react";

export function getLength(val: ComponentProps<"textarea">["value"]): number {
  if (typeof val !== "string") return 0;

  return val.length;
}

export function isTooLong(
  val: ComponentProps<"textarea">["value"],
  maxLength: ComponentProps<"textarea">["maxLength"],
) {
  if (typeof val !== "string") return false;
  if (!maxLength) return false;

  return val.length > maxLength;
}
