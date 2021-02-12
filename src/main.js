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
      const messageArray = user.deadOrAlive(userPlanet);
      console.log(messageArray[0]);
      $('p#output1').text(messageArray[0]);
      $('p#output2').text(messageArray[1]);
    }
    // Scrolls down to result on smaller screens
    window.scroll({
      top: 210,
      left: 50,
      behavior: 'smooth'
    });
  });
});