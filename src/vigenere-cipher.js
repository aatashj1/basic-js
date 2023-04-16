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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    const keyLength = key.length;
    let keyIndex = 0;

    const encryptedChars = message.split('').map(char => {
      const charCode = char.charCodeAt(0);

      if (charCode < 65 || charCode > 90) {
        return char;
      }

      const keyChar = key[keyIndex];
      const keyCharCode = keyChar.charCodeAt(0);

      keyIndex = (keyIndex + 1) % keyLength;

      const encryptedCharCode = ((charCode - 65 + keyCharCode - 65) % 26) + 65;

      return String.fromCharCode(encryptedCharCode);
    });

    return this.isDirect ? encryptedChars.join('') : encryptedChars.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const keyLength = key.length;
    let keyIndex = 0;

    const decryptedChars = encryptedMessage.split('').map(char => {
      const charCode = char.charCodeAt(0);

      if (charCode < 65 || charCode > 90) {
        return char;
      }

      const keyChar = key[keyIndex];
      const keyCharCode = keyChar.charCodeAt(0);

      keyIndex = (keyIndex + 1) % keyLength;

      const decryptedCharCode = ((charCode - 65 - keyCharCode + 65 + 26) % 26) + 65;

      return String.fromCharCode(decryptedCharCode);
    });

    return this.isDirect ? decryptedChars.join('') : decryptedChars.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
