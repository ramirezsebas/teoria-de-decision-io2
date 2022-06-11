const { isSquareMatrix } = require("../utils/is_square_matrix.js");
const { getEachColumnSum } = require("../utils/get_each_column_sum.js");

/**
 * @description Normaliza una matriz. Consiste en dividir cada elemento de cada columna por la suma de los elementos de esa columna.
 * @param {any[][]} matrix Matriz de Comparación. La matriz debe ser cuadrada.
 * @param {number} fixedDecimals Número de decimales a los que se quiere redondear. Si no se especifica, se redondeará a 2 decimales.
 * @returns Misma matrix Normalizado.
 */
function normalizeMatrix(matrix, fixedDecimals = 2) {
  //Verificamos si es un arreglo de arreglos
  if (!Array.isArray(matrix[0])) {
    throw new Error('Debe ser un arreglo de arreglos');
  }

  //Obtenemos el numero de filas y columnas
  const rows = matrix.length;
  const columns = matrix[0].length;

  if (!isSquareMatrix(rows, columns)) {
    throw new Error('Debe ser una matriz cuadrada');
  }

  //Obtenemos la suma de cada columna
  const sumColumns = getEachColumnSum(matrix);

  const normalizedMatrix = matrix;

  // Normalizamos la matriz
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      normalizedMatrix[i][j] = parseFloat((normalizedMatrix[i][j] / sumColumns[j]).toFixed(fixedDecimals));
    }
  }

  return normalizedMatrix;
}

module.exports = {
  normalizeMatrix
}


