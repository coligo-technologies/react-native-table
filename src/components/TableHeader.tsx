import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  type ColorValue,
} from 'react-native';

import type {
  BorderStyle,
  CellPadding,
  Column,
  SortingIcons,
} from '../utils/types';

interface TableHeaderProps<T> {
  columns: Column<T>[];
  sortConfig: { key: keyof T | null; direction: 'asc' | 'desc' };
  cellPadding?: CellPadding;
  sortingIcons?: SortingIcons;
  borderStyle?: BorderStyle;
  headerBackground?: ColorValue;
  onSort: (key: keyof T) => void;
}

export const TableHeader = <T extends object>({
  columns,
  sortConfig,
  cellPadding,
  sortingIcons,
  borderStyle,
  headerBackground = 'white',
  onSort,
}: TableHeaderProps<T>) => (
  <View style={[styles.row, { backgroundColor: headerBackground }]}>
    {columns.map((column, index) => (
      <View
        key={String(column.key)}
        style={[
          { ...cellPadding },
          column.width ? { width: column.width } : { flex: column.flex ?? 1 },
          { borderColor: borderStyle?.borderColor ?? 'black' },
          borderStyle?.showVertical && columns.length - 1 !== index
            ? {
                borderRightWidth: borderStyle.borderWidth ?? 1,
              }
            : undefined,
          borderStyle?.showHorizontalHeader
            ? {
                borderBottomWidth: borderStyle.borderWidth ?? 1,
              }
            : undefined,
        ]}
      >
        <TouchableOpacity
          onPress={() => column.sortable && onSort(column.key)}
          style={[styles.row]}
          disabled={!column.sortable}
        >
          {column.header ? (
            column.header(column.label)
          ) : (
            <Text style={styles.text}>{column.label}</Text>
          )}
          {column.sortable && sortConfig.key === column.key ? (
            sortingIcons ? (
              sortConfig.direction === 'asc' ? (
                sortingIcons.asc
              ) : (
                sortingIcons.desc
              )
            ) : (
              <Text style={[styles.text, styles.sorting]}>
                {sortConfig.direction === 'asc' ? '↑' : '↓'}
              </Text>
            )
          ) : null}
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  text: { fontWeight: 'bold' },
  sorting: { marginLeft: 3 },
});
