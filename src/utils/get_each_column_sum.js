/**
 * 
 * @param {Array} matrix 
 * @returns An array with the sum of each column.
 */
function getEachColumnSum(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const sumColumns = [];
  for (let i = 0; i < columns; i++) {
    let sum = 0;
    for (let j = 0; j < rows; j++) {
      sum += matrix[j][i];
    }
    sumColumns.push(sum);
  }
  return sumColumns;
}

module.exports = {
  getEachColumnSum
};