import { type HTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

import styles from "./BasicCard.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  variant?: "filled" | "outline" | "ghost";
  size?: "s" | "m" | "l";

  contentClassName?: string;
}

export const BasicCard = ({
  children,
  variant = "filled",
  size = "m",
  className,
  contentClassName,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(
        styles.card,
        styles[variant],
        styles[size],
        className
      )}
      {...props}
    >
      <div
        className={clsx(
          styles.content,
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BasicCard;