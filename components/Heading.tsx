import { AlignType } from "../types/AlignType";

export default function Heading({ level, align = 'center', children }: HeadingType) {
  const classes = `text-${align}`;
  return (
    <>
      { level === 1 && (<h1 className={`text-4xl lg:text-6xl ${classes}`}>{ children }</h1>) }
      { level === 2 && (<h2 className={`text-3xl lg:text-5xl ${classes}`}>{ children }</h2>) }
      { level === 3 && (<h3 className={`text-2xl lg:text-4xl ${classes}`}>{ children }</h3>) }
      { level === 4 && (<h4 className={`text-xl lg:text-3xl ${classes}`}>{ children }</h4>) }
      { level === 5 && (<h5 className={`text-xl lg:text-2xl ${classes}`}>{ children }</h5>) }
      { level === 6 && (<h6 className={`text-lg lg:text-xl ${classes}`}>{ children }</h6>) }
    </>
  );
}

export type HeadingType = {
  level: number;
  align?: AlignType;
  children?: any;
}