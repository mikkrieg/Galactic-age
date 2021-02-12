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
      user.deadOrAlive(userPlanet);
      $('div#output-card').show();
      $('p#output1').text(user.message1);
      $('p#output2').text(user.message2);
    }
    // Scrolls down to result on smaller screens
    window.scroll({
      top: 210,
      left: 50,
      behavior: 'smooth'
    });
  });
});