import { NotImplementedError } from '../extensions/index.js'

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let decoder = str.split('')
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      decoder[i - 1] = 2
    }
  }
  let decodeStr = ''

  decoder.forEach((el, index) => {
    let elem = el
    if (typeof el === 'number' && typeof decoder[index - 1] === 'number') {
      elem = +decodeStr[decodeStr.length - 1]
      elem++
      decodeStr = decodeStr.slice(0, decodeStr.length - 1)
    }
    decodeStr = decodeStr + elem.toString()
  })
  return decodeStr
}
