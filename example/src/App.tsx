import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Table } from '@coligo/react-native-table';
import type { BorderStyle } from '../../src/utils/types';

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  birthday: Date;
};

const exampleData: Person[] = [
  {
    id: 'cr7',
    firstName: 'Christiano',
    lastName: 'Ronaldo',
    birthday: new Date('1985-02-05'),
  },
  {
    id: 'lm10',
    firstName: 'Lionel',
    lastName: 'Messi',
    birthday: new Date('1987-06-24'),
  },
  {
    id: 'nb10',
    firstName: 'Neymar',
    lastName: 'Jr',
    birthday: new Date('1992-02-05'),
  },
  {
    id: 'mb7',
    firstName: 'Kylian',
    lastName: 'Mbappe',
    birthday: new Date('1998-12-20'),
  },
  {
    id: 'le9',
    firstName: 'Robert',
    lastName: 'Lewandowski',
    birthday: new Date('1988-08-21'),
  },
  {
    id: 'hk10',
    firstName: 'Harry',
    lastName: 'Kane',
    birthday: new Date('1993-07-28'),
  },
];

const borderStyle: BorderStyle = {
  showVertical: true,
  showHorizontalHeader: true,
  showHorizontalBody: true,
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Table
          columns={[
            {
              label: 'First name',
              key: 'firstName',
              sortable: true,
            },
            { label: 'Last name', key: 'lastName', flex: 3 },
            {
              label: 'Birthday',
              key: 'birthday',
              width: 200,
              sortable: true,
              render: (date) => {
                if (!(date instanceof Date)) return null;

                const today = new Date();
                const age = today.getFullYear() - date.getFullYear();
                const isBirthdayPassed =
                  today.getMonth() > date.getMonth() ||
                  (today.getMonth() === date.getMonth() &&
                    today.getDate() >= date.getDate());

                // Adjust age if the birthday hasn't passed yet this year
                const adjustedAge = isBirthdayPassed ? age : age - 1;

                const formattedDate = date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });

                return (
                  <Text>
                    {formattedDate} ({adjustedAge})
                  </Text>
                );
              },
            },
          ]}
          data={exampleData}
          keyExtractor="id"
          cellPadding={{
            padding: 5,
          }}
          borderStyle={borderStyle}
          style={styles.table}
          stickyHeader
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: { flex: 1 },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  table: { width: '100%' },
});
