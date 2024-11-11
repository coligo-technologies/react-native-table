import { View, Text } from 'react-native';

import type { BorderStyle, CellPadding, Column } from '../utils/types';

interface TableCellProps<T> {
  column: Column<T>;
  item: T;
  cellPadding?: CellPadding;
  borderStyle?: BorderStyle;
}

export const TableCell = <T extends object>({
  column,
  item,
  cellPadding,
  borderStyle,
}: TableCellProps<T>) => (
  <View
    style={[
      column.width ? { width: column.width } : { flex: column.flex ?? 1 },
      { ...cellPadding },
      borderStyle?.showVertical
        ? {
            borderRightWidth: borderStyle.borderWidth ?? 1,
            borderColor: borderStyle.borderColor ?? 'black',
          }
        : undefined,
    ]}
  >
    {column.render ? (
      column.render(item[column.key], item)
    ) : (
      <Text>{String(item[column.key])}</Text>
    )}
  </View>
);
