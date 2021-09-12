import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if (JSON.stringify(arr) === JSON.stringify(arr.flat())) {
      return 1
    } else {
      return this.calculateDepth(arr.flat()) + 1
    }
  }
}
