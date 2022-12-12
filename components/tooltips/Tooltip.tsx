import { useState } from "react";

export default function Tooltip({ show = true, children }: TooltipType) {
  const [showToltip, setShowToltip] = useState(show);

  return (
    <>
      { showToltip && (
        <span className="absolute bg-dark text-white -bottom-9 w-fit h-auto mx-auto left-0 right-0 rounded p-1">
          { children }
        </span>
      )}
    </>
  );
}

export type TooltipType = {
  show?: boolean
  children?: any,
};