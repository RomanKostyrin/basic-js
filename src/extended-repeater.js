import { NotImplementedError } from '../extensions/index.js'

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str)
  let add = '|'
  if (typeof options.addition === 'object') {
    options.addition = String(options.addition)
    add = ''
  } else if (options.addition !== undefined) {
    options.addition = String(options.addition)
  }

  let separator = options.separator ? options.separator : '+'
  let addition = ''
  let newStr = ''
  if (options.addition) {
    if (!options.additionSeparator && !options.separator) {
      addition = options.addition + add
      addition = options.additionRepeatTimes
        ? addition.repeat(options.additionRepeatTimes - 1) + options.addition
        : addition
    } else if (!options.additionSeparator) {
      addition = options.addition + add
      addition = options.additionRepeatTimes
        ? addition.repeat(options.additionRepeatTimes - 1) + options.addition
        : addition
    } else if (!options.separator) {
      addition = options.addition + options.additionSeparator
      addition = options.additionRepeatTimes
        ? addition.repeat(options.additionRepeatTimes - 1) + options.addition
        : addition
    } else {
      if (options.additionRepeatTimes) {
        addition = options.addition + options.additionSeparator
        addition = options.additionRepeatTimes
          ? addition.repeat(options.additionRepeatTimes - 1) + options.addition
          : addition
      } else {
        addition = options.addition
        addition = options.additionRepeatTimes
          ? addition + options.addition
          : addition
      }
    }
  }
  if (!options.repeatTimes) {
    return str + addition
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (options.addition) {
        if (options.repeatTimes !== i + 1) {
          newStr += str + addition + separator
        } else {
          newStr += str + addition
        }
      } else {
        if (options.repeatTimes !== i + 1) {
          newStr += str + separator
        } else {
          newStr += str
        }
      }
    }
  }

  return newStr
}
