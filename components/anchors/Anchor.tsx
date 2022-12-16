import { ReactElement } from "react";
import Link from 'next/link'

export default function Anchor({ href = '#', target = '_self', className, onClick, children }: AnchorType): ReactElement {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <Link href={href} target={target} className={`${className} text-primary hover:text-secondary`} onClick={ handleClick }>
      { children }
    </Link>
  );
}

export type AnchorType = {
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
  onClick?: CallableFunction;
  children?: any;
}