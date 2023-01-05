export default function getListStudentIds(students) {
  // If the input is not an array, return an empty array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the map function to return an array of student ids
  return students.map(student => student.id);
}
