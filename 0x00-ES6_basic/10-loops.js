export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  for (const item of array) {
    myArray.push(appendString + item);
  }

  return myArray;
}
