const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(dir = true) {
    this.dir = dir;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    let position = 0;

    message = message.split('');

    message.forEach((item, i) => {
      if (this.alphabet.includes(item)) {
        if (key[position] === undefined) {
          position = 0;
        }

        let sum = item.charCodeAt(0) - 65 + key[position].charCodeAt(0) - 65;

        if (sum >= 26) sum = sum % 26;

        let res = String.fromCharCode(65 + sum);
        message[i] = res;
        position += 1;
      } else {
        message[i] = item;
      }
    });

    return this.dir ? message.join('') : message.reverse().join('');
  }

  decrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    let position = 0;

    message = message.split('');
    key = key.toUpperCase();

    message.forEach((item, i) => {
      if (this.alphabet.includes(item)) {
        if (key[position] === undefined) position = 0;

        let res = item.charCodeAt(0) - 65;
        res = res - (key[position].charCodeAt(0) - 65);

        if (res < 0) res += 26;

        message[i] = String.fromCharCode(65 + res);
        position += 1;
      } else {
        message[i] = item;
      }
    });

    return this.dir ? message.join('') : message.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};