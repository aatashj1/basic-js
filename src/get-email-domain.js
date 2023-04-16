const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // Split the email address by the @ symbol
  const parts = email.split('@');
  // Return the last part of the split, which is the domain
  return parts[parts.length - 1];
}

module.exports = {
  getEmailDomain
};
