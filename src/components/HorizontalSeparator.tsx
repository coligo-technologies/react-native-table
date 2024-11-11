import { View } from 'react-native';
import type { BorderStyle } from '../utils/types';
import type { FC } from 'react';

interface HorizontalSeparatorProps {
  borderStyle?: BorderStyle;
}

export const HorizontalSeparator: FC<HorizontalSeparatorProps> = ({
  borderStyle,
}) => {
  if (!borderStyle?.showHorizontalBody) {
    return undefined;
  }

  return (
    <View
      style={{
        height: borderStyle?.borderWidth ?? 1,
        backgroundColor: borderStyle?.borderColor ?? 'black',
      }}
    />
  );
};
