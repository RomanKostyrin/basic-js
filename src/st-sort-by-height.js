import { NotImplementedError } from '../extensions/index.js'

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let sortedArray = [...arr]
  let newArr = []
  sortedArray.sort((a, b) => a - b)
  sortedArray.forEach((el) => {
    if (el !== -1) {
      newArr.push(el)
    }
  })
  arr.forEach((element, index) => {
    if (element === -1) {
      newArr.splice(index, 0, -1)
    }
  })
  return newArr
}
