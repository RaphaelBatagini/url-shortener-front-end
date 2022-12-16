import { AlignType } from "../../types/AlignType";
import { ThemeColorType } from "../../types/ThemeColorType";

export default function Card({
  align = "left",
  color = "dark",
  className,
  children,
}: CardType) {
  const getAlign = () => {
    return `text-${align}`;
  };

  const getColor = () => {
    return `text-${color}`;
  };

  return (
    <div className={`p-6 border border-light rounded ${getAlign()} ${getColor()} ${className}`}>
      {children}
    </div>
  );
}

export type CardType = {
  align?: AlignType;
  color?: ThemeColorType;
  hoverColor?: ThemeColorType;
  className?: string;
  children?: any;
};
