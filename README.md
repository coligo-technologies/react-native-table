# @coligo/react-native-table

A lightweight and customizable React Native package for creating flexible, sortable tables. Perfect for displaying structured data with support for customizable columns, headers, and cell rendering.

## Features

- **Sortable Columns**: Easily add sorting functionality to any column.
- **Customizable Headers and Cells**: Render custom content for headers and cells.
- **Flexible Layout**: Control padding, border styles, and column widths.
- **Sticky Headers**: Keep headers visible during scrolling.
- **Separator Customization**: Customize row separators for enhanced visual structure.

## Installation

```sh
npm install @coligo/react-native-table
```

## Usage

```javascript
import React from 'react';
import { Table } from '@coligo/react-native-table';

const MyTable = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Sam Wilson', age: 45 },
  ];

  const columns = [
    { label: 'ID', key: 'id', sortable: true },
    { label: 'Name', key: 'name', sortable: true },
    { label: 'Age', key: 'age', sortable: true },
  ];

  return <Table data={data} columns={columns} keyExtractor="id" stickyHeader />;
};

export default MyTable;
```

## API Reference

### Table Component

The `Table` component accepts the following props:

| Prop               | Type                        | Description                                                                               |
| ------------------ | --------------------------- | ----------------------------------------------------------------------------------------- |
| `data`             | `T[]`                       | Array of data objects to display in the table.                                            |
| `columns`          | `Column<T>[]`               | Defines the columns of the table, including keys and render functions for custom content. |
| `keyExtractor`     | `keyof T`                   | Key used to uniquely identify each row.                                                   |
| `cellPadding`      | `CellPadding`               | Optional padding for cells. See `CellPadding` below.                                      |
| `sortingIcons`     | `SortingIcons`              | Optional icons for sorting states. See `SortingIcons` below.                              |
| `borderStyle`      | `BorderStyle`               | Optional border styles for the table. See `BorderStyle` below.                            |
| `style`            | `StyleProp<ViewStyle>`      | Optional styling for the container view.                                                  |
| `stickyHeader`     | `boolean`                   | Enables sticky headers when set to `true`.                                                |
| `headerBackground` | `ColorValue`                | Optional background color for the header.                                                 |
| `rowHeader`        | `(rowData: T) => ReactNode` | Optional render function for custom row header content.                                   |
| `rowFooter`        | `(rowData: T) => ReactNode` | Optional render function for custom row footer content.                                   |

### Column Type

Each column is defined by the following properties:

| Property   | Type                                          | Description                                            |
| ---------- | --------------------------------------------- | ------------------------------------------------------ |
| `label`    | `string`                                      | Column header label.                                   |
| `key`      | `keyof T`                                     | Key in the data object to display.                     |
| `width`    | `number`                                      | Optional fixed width for the column.                   |
| `flex`     | `number`                                      | Optional flex value to proportionally size the column. |
| `sortable` | `boolean`                                     | Whether the column is sortable.                        |
| `header`   | `(label: string) => ReactNode`                | Optional custom render function for the column header. |
| `render`   | `(item: T[keyof T], rowData: T) => ReactNode` | Optional custom render function for the cell content.  |

### CellPadding Type

Defines padding for cells within the table.

| Property            | Type     | Description                   |
| ------------------- | -------- | ----------------------------- |
| `padding`           | `number` | Uniform padding for cells.    |
| `paddingHorizontal` | `number` | Horizontal padding for cells. |
| `paddingVertical`   | `number` | Vertical padding for cells.   |

### SortingIcons Type

Specifies icons for ascending and descending sorting states.

| Property | Type        | Description                     |
| -------- | ----------- | ------------------------------- |
| `asc`    | `ReactNode` | Icon for ascending sort state.  |
| `desc`   | `ReactNode` | Icon for descending sort state. |

### BorderStyle Type

Controls visibility and styling of borders within the table.

| Property               | Type      | Description                                           |
| ---------------------- | --------- | ----------------------------------------------------- |
| `showVertical`         | `boolean` | Shows vertical cell borders when `true`.              |
| `showHorizontalHeader` | `boolean` | Shows horizontal border below the header when `true`. |
| `showHorizontalBody`   | `boolean` | Shows horizontal borders between rows when `true`.    |
| `borderWidth`          | `number`  | Width of the borders.                                 |
| `borderColor`          | `string`  | Color of the borders.                                 |

## Example with Custom Cell and Header Renderers

```javascript
import React from 'react';
import { Text } from 'react-native';
import { Table } from '@coligo/react-native-table';

const MyCustomTable = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
  ];

  const columns = [
    {
      label: 'Name',
      key: 'name',
      render: (item) => <Text style={{ fontWeight: 'bold' }}>{item}</Text>,
    },
    {
      label: 'Age',
      key: 'age',
      header: (label) => <Text style={{ color: 'blue' }}>{label}</Text>,
      sortable: true,
    },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      keyExtractor="id"
      sortingIcons={{
        asc: <Text>🔼</Text>,
        desc: <Text>🔽</Text>,
      }}
      borderStyle={{
        showVertical: true,
        borderWidth: 1,
        borderColor: '#ccc',
      }}
      cellPadding={{
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    />
  );
};

export default MyCustomTable;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
