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
    expect(reusableUser.mercury()).toEqual(104);
    expect(reusableUser.mercury()).toEqual(333);
  });
});