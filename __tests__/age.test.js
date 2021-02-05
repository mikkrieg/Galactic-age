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
});