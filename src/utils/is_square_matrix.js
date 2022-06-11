/**
 * 
 * @param {number} rows 
 * @param {number} columns 
 * @returns Booleano indicando si es que es una matriz cuadrada o no.
 */
function isSquareMatrix(rows, columns) {
  return rows === columns;
}

module.exports = {
  isSquareMatrix
}