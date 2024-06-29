import Validator from '../js/validation';

test.each([
  ['Kira-999_ha'],
  ['Kira_999-ha'],
  ['Kira-999-ha'],
  ['Kira_999_ha'],
])(('тест правильных имён'), (username) => {
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test.each([
  ['Kira-9999_ha'],
])(('тест на 4 цифры в именах'), (username) => {
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test.each([
  ['_Kira-999_ha'],
  ['-Kira-999_ha'],
  ['Kira-999_ha_'],
  ['Kira-999_ha-'],
  ['9Kira-999_ha'],
  ['Kira-999_ha9'],
])(('тест на то, чтобы имена не начинались на цифры, + и -'), (username) => {
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test.each([
  ['Kira!999_ha'],
  ['Kira;999_ha'],
  ['Kira?999_ha'],
  ['Кира_999_ха'],
])(('тест на иные символы и русские буквы'), (username) => {
  expect(Validator.validateUsername(username)).toBeFalsy();
});
