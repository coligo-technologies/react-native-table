import type { ReactNode } from 'react';
import type { ColorValue, StyleProp, ViewStyle } from 'react-native';

export type Column<T> = {
  label: string;
  key: keyof T;
  id?: string;
  width?: number;
  flex?: number;
  sortable?: boolean;
  header?: (label: string) => React.ReactNode;
  render?: (item: T[keyof T], rowData: T) => React.ReactNode;
};

export type BorderStyle = {
  showVertical?: boolean;
  showHorizontalHeader?: boolean;
  showHorizontalBody?: boolean;
  borderWidth?: number;
  borderColor?: string;
};

export type CellPadding = {
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
};

export type SortingIcons = {
  asc: ReactNode;
  desc: ReactNode;
};

export type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  keyExtractor: keyof T;
  cellPadding?: CellPadding;
  sortingIcons?: SortingIcons;
  borderStyle?: BorderStyle;
  style?: StyleProp<ViewStyle>;
  stickyHeader?: boolean;
  headerBackground?: ColorValue;
  rowHeader?: (rowData: T) => React.ReactNode;
  rowFooter?: (rowData: T) => React.ReactNode;
};
