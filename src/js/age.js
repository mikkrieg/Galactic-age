export class User{
  constructor(age, lifeE){
    this.age = age;
    this.lifeE = lifeE;
  }

  mercury(){
    this.age = Math.trunc(this.age / 0.24);
    this.lifeE = Math.trunc(this.lifeE / 0.24);
  }

  venus(){
    this.age = Math.trunc(this.age / 0.62);
    this.lifeE = Math.trunc(this.lifeE / 0.62);
  }

  mars(){
    this.age = Math.trunc(this.age * 1.88);
    this.lifeE = Math.trunc(this.lifeE * 1.88);
  }

  jupiter(){
    this.age = Math.trunc(this.age * 11.86);
    this.lifeE = Math.trunc(this.lifeE * 11.86);
  }

  yearsLeft(){
    this.yearsLeft = this.lifeE - this.age;
  }

  yearsDead(){
    this.yearsDead = this.age - this.lifeE; 
  }

  deadOrAlive(userPlanet){
    if(this.age <= this.lifeE){
      this.yearsLeft();
      this.message1 = `You picked ${userPlanet}! There you would be ${this.age} ${userPlanet} years old and your life expectancy would be ${this.lifeE} ${userPlanet} years! You would have ${this.yearsLeft} years left to live on ${userPlanet}!`;
      this.message2 = `If you were a mayfly on earth, you would have lived ${this.mayFlyLives} lifetimes, wow! In relation to the suns age in earth years, that would be only ${this.sunComparison}% of its age`;
    } else {
      this.yearsDead();
      this.message1 = `You picked ${userPlanet}! There you would be ${this.age} ${userPlanet} years old and your life expectancy would be ${this.lifeE} ${userPlanet} years! You would be ${this.yearsDead} years older than your life expectancy on ${userPlanet}!`;
      this.message2 = `If you were a mayfly on earth, you would have lived ${this.mayFlyLives} lifetimes, wow! In relation to the suns age in earth years, that would be only ${this.sunComparison}% of its age`;
    } 
  }

  mayFly(){
    this.mayFlyLives = this.age * 105120; 
    this.sunComparison = ((this.mayFlyLives / 4500000000) * 100).toFixed(3);
  }
}