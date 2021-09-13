import { NotImplementedError } from '../extensions/index.js'

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let field = []

  matrix.forEach((element, index) => {
    field.push(Array(element.length).fill(0))
    element.forEach((el, i) => {
      let counter = 0

      if (matrix[index][i - 1]) {
        counter++
      }
      if (matrix[index][i + 1]) {
        counter++
      }
      if (matrix[index - 1]) {
        if (matrix[index - 1][i]) {
          counter++
        }
        if (matrix[index - 1][i - 1]) {
          counter++
        }
        if (matrix[index - 1][i + 1]) {
          counter++
        }
      }
      if (matrix[index + 1]) {
        if (matrix[index + 1][i]) {
          counter++
        }
        if (matrix[index + 1][i - 1]) {
          counter++
        }
        if (matrix[index + 1][i + 1]) {
          counter++
        }
      }

      if (counter > 0) {
        field[index][i] = counter
      }
    })
  })
  return field
}
