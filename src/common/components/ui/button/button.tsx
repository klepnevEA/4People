import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Variants = "primary" | "secondary" | "outlined" | "transparent" | "text";
type Size = "medium" | "small" | "big";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variants;
  size?: Size;
  active?: boolean;
  wide?: boolean;
  icon?: ReactNode | JSX.Element;
  type?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  size = "medium",
  active,
  disabled,
  wide,
  className,
  icon,
  onClick,
  children,
  ...rest
}) => {
  const style = classNames(
    styles.button,
    styles[variant],
    styles[size],
    className,
    {
      [styles.active]: active,
      [styles.disabled]: disabled,
      [styles.wide]: wide,
    }
  );

  const handleClick = () => {
    if (!disabled && !active && onClick) onClick();
  };

  return (
    <button className={style} onClick={handleClick} type={type} {...rest}>
      {children}
      {icon && <>{icon}</>}
    </button>
  );
};
