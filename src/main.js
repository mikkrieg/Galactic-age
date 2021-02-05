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
      $('div#output-card').show();
      if(user.age <= user.lifeE){
        user.yearsLeft()
        $('div#output').text(`You picked ${userPlanet}! On ${userPlanet} you would be ${user.age} ${userPlanet} years old and your life expectancy would be ${user.lifeE} ${userPlanet} years! You would have ${user.yearsLeft} years left to live on ${userPlanet}!`);
      } else {
        user.yearsDead();
        $('div#output').text(`You picked: ${userPlanet}, on ${userPlanet} you would be ${user.age} ${userPlanet} years old and your life expectancy would be ${user.lifeE} ${userPlanet} years! You would be ${user.yearsDead} years older than your life expectancy on ${userPlanet}!`);
      }
    }
  });
});