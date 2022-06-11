const { normalizeMatrix } = require("./bajo_certidumbre/normalize_matrix.js");
const { getEachRowAverage } = require("./bajo_certidumbre/get_each_row_average.js")

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
}

main();