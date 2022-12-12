import { AlignType } from "../types/AlignType";

export default function Paragraph({ align = 'left', spacing, children }: ParagraphType) {
  const getAlign = () => {
    if (align) {
      return `text-${align}`;
    }
  };

  const getSpacing = () => {
    const spacingTranslation = {
      'sm': '8',
      'md': '16',
      'lg': '24',
    }

    if (!spacing) {
      return `my-${spacingTranslation['sm']}`;
    }

    return `my-${spacingTranslation[spacing]}`;
  };

  return (
    <p className={`text-lg ${getAlign()} ${getSpacing()}`}>{ children }</p>
  );
}

export type ParagraphType = {
  align?: AlignType;
  spacing?: 'sm' | 'md' | 'lg';
  children?: any;
}