export function sortData<T>(
  data: T[],
  key: keyof T | null,
  direction: 'asc' | 'desc'
): T[] {
  if (!key) return data;

  return [...data].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc' ? aValue - bValue : bValue - aValue;
    } else if (aValue instanceof Date && bValue instanceof Date) {
      return direction === 'asc'
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }

    return 0;
  });
}
