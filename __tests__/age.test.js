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

  test('should calculate how many years a user has left to live based on life expectancy', () => {
    reusableUser.yearsLeft();
    expect(reusableUser.yearsLeft).toEqual(55);
  });

  test('should calculate how many years a user has lived past their life expectancy', () => {
    const oldUser = new User(90, 70);
    oldUser.yearsDead();
    expect(oldUser.yearsDead).toEqual(20);
  });

  test('should calculate how many mayfly lifetimes a user has lived and compare it to the age of the sun', () => {
    reusableUser.mayFly();
    expect(reusableUser.mayFlyLives).toEqual(2628000);
    expect(reusableUser.sunComparison).toEqual('0.058');
  });

  test('should calculate if a user is not past their life expectancy', () => {
    const userPlanet = 'Mercury' || 'Venus' || 'Mars' || 'Jupiter';
    reusableUser.deadOrAlive(userPlanet);
    expect(reusableUser.message1).toMatch(`You picked ${userPlanet}! There you would be ${reusableUser.age} ${userPlanet} years old and your life expectancy would be ${reusableUser.lifeE} ${userPlanet} years! You would have ${reusableUser.yearsLeft} years left to live on ${userPlanet}!`);
    expect(reusableUser.message2).toMatch(`If you were a mayfly on earth, you would have lived ${reusableUser.mayFlyLives} lifetimes, wow! In relation to the suns age in earth years, that would be only ${reusableUser.sunComparison}% of its age`);
  });

  test('should calculate if a user is past their life expectancy', () => {
    const userPlanet = 'Mercury' || 'Venus' || 'Mars' || 'Jupiter';
    const oldUser = new User(90, 70);
    oldUser.deadOrAlive(userPlanet);
    expect(oldUser.message1).toMatch(`You picked ${userPlanet}! There you would be ${oldUser.age} ${userPlanet} years old and your life expectancy would be ${oldUser.lifeE} ${userPlanet} years! You would be ${oldUser.yearsDead} years older than your life expectancy on ${userPlanet}!`);
    expect(oldUser.message2).toMatch(`If you were a mayfly on earth, you would have lived ${oldUser.mayFlyLives} lifetimes, wow! In relation to the suns age in earth years, that would be only ${oldUser.sunComparison}% of its age`);
  });
});