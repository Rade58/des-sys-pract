"use client";

import React from "react";

export function Button(props: any) {
  return (
    <button
      type="button"
      onClick={props.onClick ? props.onClick : undefined}
      className="cursor-pointer bg-teal-100 p-2 rounded text-black"
    >
      {props.children}
    </button>
  );
}
