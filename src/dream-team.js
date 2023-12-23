const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(arr) {
  let secretName = '';
  if(Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        secretName += arr[i].trim().slice(0, 1).toUpperCase()
      }
    }
    return secretName.split('').sort().join('')
  }
  return false
}


module.exports = {
  createDreamTeam
};
