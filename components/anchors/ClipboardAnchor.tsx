import { ReactElement, useState } from "react";
import Image from 'next/image';
import Tooltip from "../tooltips/Tooltip";
import Anchor from "./Anchor";

export default function ClipboardAnchor({ value, className }: ClipboardAnchorType): ReactElement {
  const [showCopied, setShowCopied] = useState(false);

  const addToClipboard = () => {
    if (value) {
      navigator.clipboard.writeText(value);
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false)
      }, 700);
    }
  }

  return (
    <>
      <Anchor onClick={ addToClipboard } className="relative">
        <Image src="/images/copy-icon.svg" className={`inline-block ${className}`} width={18} height={18} alt="Copy Icon"/>
        { showCopied && (
          <Tooltip show={ showCopied }>Copied</Tooltip>
        ) }
      </Anchor>
    </>
  );
}

export type ClipboardAnchorType = {
  value?: string;
  className?: string;
}