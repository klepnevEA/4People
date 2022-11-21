import styles from "./input.module.scss";
import cs from "classnames";
import { useEffect, useState } from "react";

export const Input = ({
  name,
  label,
  className,
  disabled,
  placeholder,
  onChange,
  isError,
  icon,
  isSmall,
  valueProp,
  errors,
}: any) => {
  const [value, setValue] = useState(valueProp || "");
  useEffect(() => {
    setValue(value);
  }, [value]);
  return (
    <div
      className={cs(
        styles.inputWrapper,
        {
          [styles.disabled]: disabled,
          [styles.error]: isError,
          [styles.small]: isSmall,
        },
        className
      )}
    >
      {label ? <div className={styles.inputLabel}>{label}</div> : null}

      <div className={styles.inputField}>
        <input
          name={name}
          className={styles.input}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            setValue(e.target.value);
            onChange && onChange(e);
          }}
          value={value}
        />
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
      <div>{errors.length ? <>{errors.message}</> : <></>}</div>
    </div>
  );
};
