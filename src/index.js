const { normalizeMatrix } = require("./bajo_certidumbre/normalize_matrix.js");

function main() {
  let matrix = [
    [1, 1 / 5],
    [5, 1]
  ];

  let normalized = normalizeMatrix(matrix);
  console.log(normalized);
}

main();