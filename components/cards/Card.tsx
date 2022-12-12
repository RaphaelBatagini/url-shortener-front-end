import { AlignType } from "../../types/AlignType";
import { ThemeColorType } from "../../types/ThemeColorType";

export default function Card({
  link,
  align = "left",
  color = "dark",
  hoverColor = "primary",
  className,
  children,
}: CardType) {
  const getAlign = () => {
    return `text-${align}`;
  };

  const getColor = () => {
    return `text-${color}`;
  };

  const getHoverColor = () => {
    return `hover:text-${hoverColor} hover:border-${hoverColor}`;
  };

  return (
    <a
      href={link}
      className={`p-6 border border-light rounded ${getAlign()} ${getColor()} ${getHoverColor()} ${className}`}
    >
      {children}
    </a>
  );
}

export type CardType = {
  link?: string;
  align?: AlignType;
  color?: ThemeColorType;
  hoverColor?: ThemeColorType;
  className?: string;
  children?: any;
};
