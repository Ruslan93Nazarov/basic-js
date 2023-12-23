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
  constructor(direct = true) {
    this.direct = direct;
  }

  processString(string, key, encrypt) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }

    string = string.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let index = 0;

    for (let i = 0; i < string.length; i++) {
      let char = string[i];

      if (char >= "A" && char <= "Z") {
        let shift = encrypt ? 1 : -1;
        let code =
            ((char.charCodeAt(0) -
                    65 +
                    shift * (key[index % key.length].charCodeAt(0) - 65) +
                    26) %
                26) +
            65;
        result += String.fromCharCode(code);
        index++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }

  encrypt(message, key) {
    return this.processString(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.processString(encryptedMessage, key, false);
  }
}
