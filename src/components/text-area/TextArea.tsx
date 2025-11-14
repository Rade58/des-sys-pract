import clsx from "clsx";
import { useMemo, useState, type ComponentProps } from "react";
import { getLength, isTooLong } from "./get_length";

import { twMerge as merge } from "tailwind-merge";

type TextAreaProps = ComponentProps<"textarea"> & { label: string };

export function TextArea({
  label,
  required,
  maxLength,

  ...props
}: TextAreaProps) {
  const [val, setVal] = useState(props.value ?? "");

  const tooLong = useMemo(() => isTooLong(val, maxLength), [val, maxLength]);

  const length = useMemo(() => getLength(val), [val]);

  // console.log({ label, required, val, maxLength, tooLong, length });

  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={merge(
          "inline-flex items-center gap-1 text-sm font-medium",
          required &&
            "after:bg-accent-500 after:h-1.5 after:w-1.5 after:rounded-full",
        )}
      >
        {label}
      </span>

      <textarea
        className={merge(
          "invalid:bg-danger-50 focus:bg-primary-200 focus:ring-primary-600 w-full gap-2 rounded-md bg-transparent bg-white p-4 text-sm placeholder-slate-400 shadow-sm ring-1 ring-inset ring-slate-500 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 dark:bg-slate-800 dark:placeholder-slate-300",
          tooLong &&
            "ring-danger-500 dark:ring-danger-500 focus:bg-danger-100 ring-2 focus:ring-danger-600",
        )}
        {...props}
        onChange={(e) => {
          setVal(e.target.value);
          if (typeof props.onChange === "function") props.onChange(e);
        }}
        value={val}
        required={required}
        aria-invalid={tooLong}
      />

      {maxLength && (
        <div className="gap-1.4 flex justify-end text-xs">
          <p className={merge(tooLong ? "text-danger-400" : "text-slate-400")}>
            <span data-testid="length">{length}</span>/{maxLength}
          </p>
        </div>
      )}
    </label>
  );
}
