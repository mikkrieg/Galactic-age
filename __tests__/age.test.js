import {User} from "../src/js/age.js"

describe('User', () => {
  let reusableUser;

  beforeEach(() => {
    reusableUser = new User(25, 80);
  });

  test('should create a user object', () => {
    expect(reusableUser.age).toEqual(25);
    expect(reusableUser.lifeE).toEqual(80);
  });

  test('should calculate a users age and life expectancy on mercury', () => {
    reusableUser.mercury();
    expect(reusableUser.age).toEqual(104);
    expect(reusableUser.lifeE).toEqual(333);
  });

  test('should calculate a users age and life expectancy on venus', () => {
    reusableUser.venus();
    expect(reusableUser.age).toEqual(40);
    expect(reusableUser.lifeE).toEqual(129);
  });

  test('should calculate a users age and life expectancy on mars', () => {
    reusableUser.mars();
    expect(reusableUser.age).toEqual(47);
    expect(reusableUser.lifeE).toEqual(150);
  });

  test('should calculate a users age and life expectancy on jupiter', () => {
    reusableUser.jupiter();
    expect(reusableUser.age).toEqual(296);
    expect(reusableUser.lifeE).toEqual(948);
  });

});