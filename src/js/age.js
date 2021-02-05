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
    
  }



}


// if(this.age <= this.lifeE){
//   this.lifeLeft =  this.lifeE - this.age;
// }
// if(this.age >= this.lifeE){
//   this.yearsDead = this.age - this.lifeE;
// }