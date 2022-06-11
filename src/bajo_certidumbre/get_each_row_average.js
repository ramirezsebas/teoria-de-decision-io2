
/**
 * 
 * @param {any[]} matrix 
 * @returns Retorna un arreglo con el promedio de cada fila.
 */
function getEachRowAverage(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const averageRows = [];

  for (let i = 0; i < rows; i++) {
    let sum = 0;
    for (let j = 0; j < columns; j++) {
      sum += matrix[i][j];
    }
    sum = sum / columns;
    averageRows.push(sum);
  }
  return averageRows;
}

module.exports = {
  getEachRowAverage
};