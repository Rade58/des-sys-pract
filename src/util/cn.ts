import clsx, { type ClassValue } from "clsx";
import { twJoin, twMerge } from "tailwind-merge";

export function cnJoin(...inputs: ClassValue[]) {
  return twJoin(clsx(inputs));
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
