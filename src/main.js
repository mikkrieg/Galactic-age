import $ from 'jquery';
import {User} from "./js/age.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    const userAge = $('input#age').val();
    const userLifeE = $('input#life-exp').val();
    const userPlanet = $('select').val();
    let user = new User(userAge, userLifeE);

    if(userPlanet === 'Mercury'|| userPlanet === 'Venus' || userPlanet === 'Mars' || userPlanet === 'Jupiter'){
      user[userPlanet.toLowerCase()]();
      user.mayFly();
      $('div#output-card').show();
      if(user.age <= user.lifeE){
        user.yearsLeft();
        $('p#output1').text(`You picked ${userPlanet}! There you would be ${user.age} ${userPlanet} years old and your life expectancy would be ${user.lifeE} ${userPlanet} years! You would have ${user.yearsLeft} years left to live on ${userPlanet}!`);
        $('p#output2').text(`If you were a mayfly on earth, you would have lived ${user.mayFlyLives} lifetimes, wow! In relation to the suns age in earth years, that would be only ${user.sunComparison}% of its age`);
      } else {
        user.yearsDead();
        $('p#output1').text(`You picked ${userPlanet}! There you would be ${user.age} ${userPlanet} years old and your life expectancy would be ${user.lifeE} ${userPlanet} years! You would be ${user.yearsDead} years older than your life expectancy on ${userPlanet}!`);
        $('p#output2').text(`If you were a mayfly on earth, you would have lived ${user.mayFlyLives} lifetimes, wow! In relation to the suns age in earth years, that would be only ${user.sunComparison}% of its age`);
      }
    }
    // Scrolls down to result on smaller screens
    window.scroll({
      top: 210,
      left: 50,
      behavior: 'smooth'
    });
  });
});