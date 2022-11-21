import { FC, ElementType, HTMLProps } from "react";
import cs from "classnames";
import styles from "./typography.module.scss";

type ComponentType = "span" | "p" | "div" | "a" | "h1" | "h2" | "h3";
type Variant =
  | "body0"
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "mainTitle"
  | "title"
  | "titleSmall";
type Transform = "uppercase" | "lowercase";

type Align = "left" | "center" | "right";

const alignMap: { [K in Align]: string } = {
  left: styles.alignLeft,
  right: styles.alignRight,
  center: styles.alignCenter,
};

const transformMap: { [K in Transform]: string } = {
  uppercase: styles.uppercase,
  lowercase: styles.lowercase,
};

const componentMap = {
  body0: "div",
  body1: "div",
  body2: "div",
  body3: "div",
  body4: "div",
  mainTitle: "h1",
  title: "h2",
  titleSmall: "h3",
} as Partial<{ [k in Variant]: ComponentType }>;

export type TypographyProps<C extends ElementType = ComponentType> = Omit<
  HTMLProps<C>,
  "color"
> & {
  component?: C;
  variant?: Variant;
  transform?: Transform;
  align?: Align;
  color?: string;
  weight?: string;
  fontSize?: number;
  href?: string;
};

export const Typography: FC<TypographyProps> = ({
  variant,
  transform,
  component,
  color,
  align,
  weight,
  fontSize,
  className,
  style,
  children,
  href,
  ...rest
}) => {
  const classes = cs(
    variant && styles[variant],
    align && alignMap[align],
    transform && transformMap[transform],
    className
  );
  const colorText = color ? { color: `${color}` } : undefined;
  const size = !!fontSize ? { fontSize: `${fontSize}px` } : undefined;
  const fontWeight = !!weight ? { fontWeight: `${weight}` } : undefined;
  const currentStyles = {
    ...style,
    ...size,
    ...colorText,
    ...fontWeight,
  };
  const variantType = variant || "body1";
  const Component = (
    component
      ? component
      : variantType in componentMap
      ? componentMap[variantType]
      : variant
  ) as ElementType;

  return (
    <Component className={classes} href={href} style={currentStyles} {...rest}>
      {children}
    </Component>
  );
};
