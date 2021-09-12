import { NotImplementedError } from '../extensions/index.js'

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  console.log(arr)
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let array = [...arr]

  let newArr = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] === '--discard-next') {
      array[index + 1] = undefined
      index++
    } else if (array[index] === '--discard-prev') {
      if (newArr[newArr.length - 1] === array[index - 1]) {
        newArr.pop()
      }
    } else if (array[index] === '--double-next') {
      if (array[index + 1] != undefined) {
        newArr.push(array[index + 1])
      }
    } else if (array[index] === '--double-prev') {
      if (array[index - 1] != undefined) {
        newArr.push(array[index - 1])
      }
    } else {
      newArr.push(array[index])
    }
  }
  return newArr
}
