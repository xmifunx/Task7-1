export default class Validator {
  static validateUsername(username) {
    return /^[A-Z,a-z][-\w]+[A-Z,a-z]$/i.test(username) && !/\d{4,}/.test(username);
  }
}
