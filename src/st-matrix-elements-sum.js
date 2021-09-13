import { NotImplementedError } from '../extensions/index.js'

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((acc, el) => acc + el)
  matrix.forEach((element, index) => {
    if (index === 0) {
    } else {
      element.forEach((el, i) => {
        if (matrix[index - 1][i] !== 0) {
          sum += el
        }
      })
    }
  })
  return sum
}
