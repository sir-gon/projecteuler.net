/**
 * Lattice paths
 *
 * https://projecteuler.net/problem=15
 *
 *
 * Starting in the top left corner of a 2×2 grid, and only being able to move
 * to the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result found: 137846528820
 *
 * ////////////////////////////////////////////////////////////////////////////
 */

import { matrix } from './helpers/index.js';

function problem0015(gridSide = 20, _DEBUG) {
  const vertexMatrix = matrix(gridSide + 1, gridSide + 1, 1);

  for (let i = 1; i <= gridSide; i++) {
    for (let j = 1; j <= gridSide; j++) {
      const upperParent = vertexMatrix[i - 1][j];
      const leftParent = vertexMatrix[i][j - 1];

      vertexMatrix[i][j] = upperParent + leftParent;
    }
  }

  if (_DEBUG) console.table(`Paths found: ${vertexMatrix[gridSide][gridSide]}`);
  if (_DEBUG) console.table(vertexMatrix);

  return vertexMatrix[gridSide][gridSide];
}

export default problem0015;
export { problem0015 };