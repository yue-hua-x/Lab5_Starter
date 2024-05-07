// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber: normal phone number', () =>{
  expect(isPhoneNumber("666-666-6666")).toBe(true);
  
});

test('isPhoneNumber: with country code', () =>{
  expect(isPhoneNumber("1-666-666-6666")).toBe(true);
});

test('isPhoneNumber: too few numbers in one section', () =>{
  expect(isPhoneNumber("1-666--6666")).toBe(false);
});

test('isPhoneNumber: missing a chunk of the number', () =>{
  expect(isPhoneNumber("1-666-666")).toBe(false);
});

test('isEmail: normal email', () =>{
  expect(isEmail("yeehaw@potato.com")).toBe(true);
});

test('isEmail: email with numbers?', () =>{
  expect(isEmail("yeehaw123@potato.com")).toBe(true);
});

test('isEmail: email without tld', () =>{
  expect(isEmail("yeehaw123@potato")).toBe(false);
});

test('isEmail: email without username', () =>{
  expect(isEmail("@potato.pow")).toBe(false);
});

test('isStrongPassword: valid password (alphanumeric)', () =>{
  expect(isStrongPassword("abcd1234")).toBe(true);
});

test('isStrongPassword: valid password (alpha_numeric)', () =>{
  expect(isStrongPassword("abcd_1234___")).toBe(true);
});

test('isStrongPassword: invalid password (starts with _)', () =>{
  expect(isStrongPassword("_abcd1234")).toBe(false);
});

test('isStrongPassword: invalid password (too long)', () =>{
  expect(isStrongPassword("six_foot_peppa_pig")).toBe(false);
});

test('isDate: valid date (two digit month)', () =>{
  expect(isDate("02/27/2004")).toBe(true);
});

test('isDate: valid date (one digit month)', () =>{
  expect(isDate("2/27/2004")).toBe(true);
});

test('isDate: invalid date (two digit year)', () =>{
  expect(isDate("02/27/04")).toBe(false);
});

test('isDate: invalid date (incorrect format)', () =>{
  expect(isDate("02-27-2004")).toBe(false);
});

test('isHexColor: valid color (six digit)', () =>{
  expect(isHexColor("#AAA")).toBe(true);
});

test('isHexColor: valid color (six digit)', () =>{
  expect(isHexColor("#AAABBB")).toBe(true);
});

test('isHexColor: invalid color (seven digits)', () =>{
  expect(isHexColor("AAABBBB")).toBe(false);
});

test('isHexColor: invalid color (four digits)', () =>{
  expect(isHexColor("AAAA")).toBe(false);
});