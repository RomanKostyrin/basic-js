import { NotImplementedError } from '../extensions/index.js'

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(last_activity) {
  if (
    last_activity >= 15 ||
    last_activity <= 0 ||
    typeof last_activity !== 'string'
  ) {
    return false
  }
  let valid_activity = parseFloat(+last_activity)
  let res =
    Math.log(MODERN_ACTIVITY / valid_activity) / (0.693 / HALF_LIFE_PERIOD)
  if (Number.isNaN(res)) {
    return false
  }
  return Math.ceil(res)
}
