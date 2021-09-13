import { NotImplementedError } from '../extensions/index.js'

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let map = {}
  let reverse = domains.map(
    (element) => element.split('.').reverse().join('.') + '.'
  )
  let sign = ''
  reverse.forEach((element) => {
    sign = '.' + element.slice(0, element.indexOf('.'))
    while (element) {
      console.log(sign)
      map[sign] = map[sign] ? map[sign] + 1 : 1
      element = element.slice(element.indexOf('.') + 1)
      sign = sign + '.' + element.slice(0, element.indexOf('.'))
    }
  })
  return map
}
