import { NotImplementedError } from '../extensions/index.js'

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let dt = []

  members.forEach((el) => {
    if (typeof el === 'string') {
      dt.push(el.replace(/\s/g, ''))
    }
  })
  dt = dt.map((el) => el[0])
  dt = dt.map((el) => el.toUpperCase())
  dt.sort((a, b) => a[0].localeCompare(b[0]))
  return dt.join('')
}
