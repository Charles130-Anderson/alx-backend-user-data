export default function updateUniqueItems(groceries) {
  // Check if groceries is an instance of Map
  if (!(groceries instanceof Map)) {
    throw Error('Cannot process');
  }

  // Update items with value 1 to 100
  groceries.forEach((val, key) => {
    if (val === 1) {
      groceries.set(key, 100);
    }
  });

  return groceries;
}
