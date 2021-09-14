import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(is) {
    this.reverse = true | is
    this.lang = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(message, key) {
    if (!key || !message) {
      throw new Error('Incorrect arguments!')
    }

    key = key.toUpperCase()
    message = message.toUpperCase()
    let encryptMessage = ''
    const length = message.split(' ').reduce((acc, el) => acc + el.length, 0)

    if (key.length < length) {
      key = key.repeat(length * length + 200).slice(0, length)
    }
    let shift = 0
    for (let i = 0; i < length; i++) {
      if (message[i + shift] === ' ') {
        shift++
        encryptMessage += ' '
      }
      if (this.lang.indexOf(message[i + shift]) === -1) {
        encryptMessage += message[i + shift]
      } else {
        const char =
          (this.lang.indexOf(message[i + shift]) + this.lang.indexOf(key[i])) %
          26
        encryptMessage += this.lang[char]
      }
    }
    if (!this.reverse) {
      encryptMessage = encryptMessage.reverse()
    }
    return encryptMessage
  }

  decrypt(encryptedMessage, key) {
    if (!key || !encryptedMessage) {
      throw new Error('Incorrect arguments!')
    }
    key = key.toUpperCase()
    encryptedMessage = encryptedMessage.toUpperCase()
    let encryptMessage = ''
    const length = encryptedMessage
      .split(' ')
      .reduce((acc, el) => acc + el.length, 0)
    if (key.length < length) {
      key = key.repeat(length * length + 200).slice(0, length)
    }
    let shift = 0
    for (let i = 0; i < length; i++) {
      if (encryptedMessage[i + shift] === ' ') {
        shift++
        encryptMessage += ' '
      }
      if (this.lang.indexOf(encryptedMessage[i + shift]) === -1) {
        encryptMessage += encryptedMessage[i + shift]
      } else {
        let char =
          this.lang.indexOf(encryptedMessage[i + shift]) -
          this.lang.indexOf(key[i])
        if (char < 0) {
          char += 26
        }
        encryptMessage += this.lang[char]
      }
    }
    return encryptMessage
  }
}
