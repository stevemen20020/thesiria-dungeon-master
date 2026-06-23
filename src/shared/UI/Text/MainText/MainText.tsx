import { type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";

import styles from "./MainText.module.css";

export type TextVariant = "body" | "label" | "caption" | "eyebrow";
export type FontSizeVariant = "xs" | "sm" | "md" | "lg" | "xl";
export type FontWeightVariant = "normal" | "medium" | "bold";

interface MainTextProps {
  children?: ReactNode;
  size?: FontSizeVariant;
  weight?: FontWeightVariant;
  color?: string;
  content?: string;
  upperCase?: boolean;
  italic?: boolean;
  variant?: TextVariant;
  textAlign?: CSSProperties["textAlign"];
  numberOfLines?: number;
  className?: string;
  style?: CSSProperties;
}

const defaultSizeByVariant: Record<TextVariant, FontSizeVariant> = {
  body: "md",
  label: "sm",
  caption: "sm",
  eyebrow: "xs",
};

export const MainText = ({
  children,
  size,
  weight = "normal",
  color,
  content,
  upperCase = false,
  italic = false,
  variant = "body",
  textAlign,
  numberOfLines,
  className,
  style,
}: MainTextProps) => {
  const resolvedSize = size ?? defaultSizeByVariant[variant];

  const inlineStyles: CSSProperties = {
    color,
    textAlign,
    ...style,
  };

  if (numberOfLines) {
    inlineStyles.overflow = "hidden";
    inlineStyles.textOverflow = "ellipsis";
    inlineStyles.display = "-webkit-box";
    inlineStyles.WebkitBoxOrient = "vertical";
    inlineStyles.WebkitLineClamp = numberOfLines;
  }

  return (
    <span
      className={clsx(
        styles.base,
        styles[variant],
        styles[resolvedSize],
        styles[weight],
        upperCase && styles.upperCase,
        italic && styles.italic,
        className
      )}
      style={inlineStyles}
    >
      {content ?? children}
    </span>
  );
};

export default MainText;