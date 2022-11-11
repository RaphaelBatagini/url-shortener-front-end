import { ReactElement, useState } from "react";
import Tooltip from "../tooltips/Tooltip";
import Anchor from "./Anchor";

export default function ClipboardAnchor({ value, children }: ClipboardAnchorType): ReactElement {
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
        { children }
        { showCopied && (
          <Tooltip show={ showCopied }>Copied</Tooltip>
        ) }
      </Anchor>
    </>
  );
}

export type ClipboardAnchorType = {
  value?: string;
  children?: any;
}