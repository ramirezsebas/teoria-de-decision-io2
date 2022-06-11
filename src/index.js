const { normalizeMatrix } = require("./bajo_certidumbre/normalize_matrix.js");
const { getEachRowAverage } = require("./bajo_certidumbre/get_each_row_average.js");
const { getEachColumnSum } = require("./utils/get_each_column_sum.js");

function main() {
  let matrix = [
    [1, 1 / 5],
    [5, 1]
  ];

  console.log("La Matriz de Comparacion seria: ");
  console.log(matrix);

  let normalized = normalizeMatrix(matrix);

  console.log("La Matriz normalizado queda de la siguiente manera: ");
  console.log(normalized);

  const rowsAverage = getEachRowAverage(normalized);
  console.log("El promedio de cada fila es: ");
  console.log(rowsAverage);

  console.log();

  const au = [
    [1, 1 / 2, 1 / 5],
    [2, 1, 1 / 2],
    [5, 2, 1]
  ];

  const ar = [
    [1, 2, 3],
    [1 / 2, 1, 3 / 2],
    [1 / 3, 2 / 3, 1]
  ];

  const auColumnsSums = getEachColumnSum(au);
  const arColumnsSums = getEachColumnSum(ar);

  console.log("La suma de cada columna de la matriz de AU es: ");
  console.log(auColumnsSums);

  console.log("La suma de cada columna de la matriz de AR es: ");
  console.log(arColumnsSums);

  console.log();

  const normalizedAu = normalizeMatrix(au, 3);
  const normalizedAr = normalizeMatrix(ar, 3);

  console.log("La matriz normalizada de AU es: ");
  console.log(normalizedAu);

  console.log("La matriz normalizada de AR es: ");
  console.log(normalizedAr);


}

main();