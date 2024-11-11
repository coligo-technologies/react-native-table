import { StyleSheet, View } from 'react-native';

import type { BorderStyle, CellPadding, Column } from '../utils/types';
import { TableCell } from './TableCell';

interface TableRowProps<T> {
  item: T;
  columns: Column<T>[];
  cellPadding?: CellPadding;
  borderStyle?: BorderStyle;
  rowHeader?: (rowData: T) => React.ReactNode;
  rowFooter?: (rowData: T) => React.ReactNode;
}

export const TableRow = <T extends object>({
  item,
  columns,
  cellPadding,
  borderStyle,
  rowHeader,
  rowFooter,
}: TableRowProps<T>) => (
  <View>
    {rowHeader ? rowHeader(item) : null}
    <View style={styles.row}>
      {columns.map((column, index) => (
        <TableCell
          key={index}
          column={column}
          item={item}
          cellPadding={cellPadding}
          borderStyle={index !== columns.length - 1 ? borderStyle : undefined}
        />
      ))}
    </View>
    {rowFooter ? rowFooter(item) : null}
  </View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
});
