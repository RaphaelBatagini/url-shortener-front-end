import { ThemeColorType } from "../../types/ThemeColorType";

export default function Button({
  type = 'button',
  id = '',
  backgroundColor = 'primary',
  textColor = 'white',
  className = '',
  children,
}: DefaultButtonType) {
  return (
    <button
      id={id}
      type={type}
      className={`p-5 bg-${backgroundColor} text-${textColor} border border-${backgroundColor} hover:opacity-75 ${className}`}
    >
      {children}
    </button>
  );
}

export type DefaultButtonType = {
  type?: "button" | "submit" | "reset" | undefined;
  id?: string;
  backgroundColor?: ThemeColorType;
  textColor?: ThemeColorType;
  children?: any;
  className?: string;
};
