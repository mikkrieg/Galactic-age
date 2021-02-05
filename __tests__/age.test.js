import {User} from "../src/js/age.js"

describe('User', () => {
  let reusableUser;

  beforeEach(() => {
    reusableUser = new User(25, 80);
  });

  test('should create a user object', () => {
    expect(reusableUser.age).toEqual(25);
  })
});