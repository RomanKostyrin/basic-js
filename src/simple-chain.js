import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let str = ''
    this.chain.forEach((el, index) => {
      str += index === 0 ? `( ${el} )` : `~~( ${el} )`
    })
    this.chain = []
    return str
  },
}
