import { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import type { TableProps } from '../utils/types';
import { sortData } from '../utils/sorting';
import { HorizontalSeparator } from './HorizontalSeparator';

export const Table = <T extends object>({
  data,
  columns,
  keyExtractor,
  cellPadding,
  sortingIcons,
  borderStyle,
  style,
  stickyHeader,
  headerBackground,
  rowHeader,
  rowFooter,
}: TableProps<T>) => {
  const [sortedData, setSortedData] = useState<T[]>(data);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: 'asc' | 'desc';
  }>({
    key: columns.find((c) => c.sortable)?.key ?? null,
    direction: 'desc',
  });

  const handleSort = (key: keyof T) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
    setSortedData(sortData(sortedData, key, direction));
  };

  const renderSeparator = () => {
    return <HorizontalSeparator borderStyle={borderStyle} />;
  };

  useEffect(() => {
    setSortedData(sortData(data, sortConfig.key, sortConfig.direction));
  }, [data, sortConfig]);

  return (
    <View style={style}>
      <FlatList
        data={sortedData}
        ListHeaderComponent={
          <TableHeader
            columns={columns}
            sortConfig={sortConfig}
            cellPadding={cellPadding}
            sortingIcons={sortingIcons}
            borderStyle={borderStyle}
            headerBackground={headerBackground}
            onSort={handleSort}
          />
        }
        stickyHeaderIndices={stickyHeader ? [0] : undefined}
        renderItem={({ item }) => (
          <TableRow
            item={item}
            columns={columns}
            cellPadding={cellPadding}
            borderStyle={borderStyle}
            rowHeader={rowHeader}
            rowFooter={rowFooter}
          />
        )}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(rowData) => String(rowData[keyExtractor])}
      />
    </View>
  );
};
