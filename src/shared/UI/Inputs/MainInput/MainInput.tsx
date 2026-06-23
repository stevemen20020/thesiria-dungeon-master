import { useState, type InputHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import styles from "./MainInput.module.css";

interface MainInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: string;
  onChange: (value: string) => void;

  label?: string;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  variant?: "clear" | "filled";

  error?: string;
  disabled?: boolean;

  isPassword?: boolean;
}

export const MainInput = ({
  value,
  onChange,
  label,
  leftIcon,
  rightIcon,
  variant = "clear",
  error,
  disabled = false,
  isPassword = false,
  className,
  placeholder,
  ...props
}: MainInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secure, setSecure] = useState(isPassword);

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div
        className={clsx(
          styles.container,
          styles[variant],
          isFocused && styles.focused,
          error && styles.errorState,
          disabled && styles.disabled,
          className
        )}
      >
        {leftIcon && <div className={styles.icon}>{leftIcon}</div>}

        <input
          {...props}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          type={secure ? "password" : "text"}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={styles.input}
        />

        {isPassword ? (
          <button
            type="button"
            onClick={() => setSecure((prev) => !prev)}
            className={styles.iconButton}
          >
            {secure ? <RemoveRedEyeOutlinedIcon fontSize="medium" /> : <VisibilityOffOutlinedIcon fontSize="medium" />}
          </button>
        ) : (
          rightIcon && <div className={styles.icon}>{rightIcon}</div>
        )}
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default MainInput;