import { FC, ButtonHTMLAttributes, memo } from "react";

import s from "./index.module.scss";

interface IUIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const UIButton: FC<IUIButtonProps> = memo(
  ({ children, className, ...props }) => {
    return (
      <button className={`${s.UIButton} ${className}`} {...props}>
        {children}
      </button>
    );
  }
);
