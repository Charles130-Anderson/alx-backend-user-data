export default function groceriesList() {
  const finalMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  // Get object keys as an array
  const list = Array.from(Object.keys(obj));

  // Set key-value pairs in finalMap
  list.map((item) => finalMap.set(item, obj[item]));
  
  return finalMap;
}
