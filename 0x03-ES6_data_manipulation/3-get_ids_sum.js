export default function getStudentIdsSum(list) {
  return list.reduce((sum, i) => sum + i.id, 0);
}
