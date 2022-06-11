/**
 * 
 * @param {Array} matrix
 * @param {number} fixedDecimals Número de decimales a los que se quiere redondear. Si no se especifica, se redondeará a 2 decimales. 
 * @returns An array with the sum of each column.
 */
function getEachColumnSum(matrix,fixedDecimals = 2) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const sumColumns = [];
  for (let i = 0; i < columns; i++) {
    let sum = 0;
    for (let j = 0; j < rows; j++) {
      sum += matrix[j][i];
    }
    sumColumns.push(parseFloat(sum.toFixed(fixedDecimals)));
  }
  return sumColumns;
}

module.exports = {
  getEachColumnSum
};