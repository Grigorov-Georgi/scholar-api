import { forwardRef, useImperativeHandle, useRef } from "react";
import "./Input.css";

type InputProps = {
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input = forwardRef<Partial<HTMLInputElement>, InputProps>(
  (
    {
      wrapperClassName = "input-wrapper",
      type = "text",
      value,
      label,
      labelClassName,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      focus(): void {
        inputRef.current?.focus();
      },
    }));
    return (
      <div className={wrapperClassName}>
        {label ? <div className={labelClassName}>{label ?? ""}</div> : null}
        <input ref={inputRef} type={type} value={value} {...props} />
      </div>
    );
  }
);

export default Input;
