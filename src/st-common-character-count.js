import { NotImplementedError } from '../extensions/index.js'

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let counter = 0
  let map1 = {}
  let map2 = {}
  for (let i = 0; i < s1.length; i++) {
    if (map1[s1[i]]) {
      map1[s1[i]]++
    } else {
      map1[s1[i]] = 1
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (map2[s2[j]]) {
      map2[s2[j]]++
    } else {
      map2[s2[j]] = 1
    }
  }
  Object.keys(map1).map((el, index) => {
    if (map2[el]) {
      counter += Math.min(map2[el], map1[el])
    }
  })
  return counter
}
