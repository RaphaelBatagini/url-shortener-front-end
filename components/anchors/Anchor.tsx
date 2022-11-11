import { ReactElement } from "react";

export default function Anchor({ href = '#', target = '_self', className, onClick, children }: AnchorType): ReactElement {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <a href={href} target={target} className={`${className} text-primary hover:text-secondary`} onClick={ handleClick }>
      { children }
    </a>
  );
}

export type AnchorType = {
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
  onClick?: CallableFunction;
  children?: any;
}