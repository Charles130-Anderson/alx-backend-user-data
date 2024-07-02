export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((items) => items.id);
  }
  return [];
}
